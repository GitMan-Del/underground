import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcrypt'
import { supabase } from '../../../../lib/supabase'

export async function POST(request: NextRequest) {
  try {
    const { email, name, password } = await request.json()

    // Validation
    if (!email || !name || !password) {
      return NextResponse.json(
        { error: 'Toate câmpurile sunt obligatorii' },
        { status: 400 }
      )
    }

    if (password.length < 6) {
      return NextResponse.json(
        { error: 'Parola trebuie să aibă cel puțin 6 caractere' },
        { status: 400 }
      )
    }

    // Check if user already exists
    const { data: existingUser, error: checkError } = await supabase
      .from('users_tabel')
      .select('id')
      .or(`email.eq.${email},name.eq.${name}`)

    if (checkError) {
      console.error('Error checking existing user:', checkError)
      return NextResponse.json(
        { error: 'Eroare la verificarea utilizatorului' },
        { status: 500 }
      )
    }

    if (existingUser && existingUser.length > 0) {
      return NextResponse.json(
        { error: 'Email-ul sau numele există deja' },
        { status: 409 }
      )
    }

    // Hash password
    const saltRounds = 12
    const passwordHash = await bcrypt.hash(password, saltRounds)

    // Get current timestamp
    const now = new Date().toISOString()

    // Create user in Supabase
    const { data: newUser, error: createError } = await supabase
      .from('users_tabel')
      .insert([
        {
          email,
          name,
          password_hash: passwordHash,
          has_access: false, // Set default access to false
          created_at: now,
          updated_at: now,
        }
      ])
      .select('id, email, name, has_access, created_at')
      .single()

    if (createError) {
      console.error('Error creating user:', createError)
      return NextResponse.json(
        { error: 'Eroare la crearea utilizatorului' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      message: 'Cont creat cu succes! Contul va fi activat de administrator.',
      user: {
        id: newUser.id,
        email: newUser.email,
        name: newUser.name,
        has_access: newUser.has_access,
      }
    }, { status: 201 })

  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json(
      { error: 'Eroare internă a serverului' },
      { status: 500 }
    )
  }
}
