import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcrypt'
import { supabaseAdmin } from '../../../lib/supabase-admin'

export async function POST(request: NextRequest) {
  try {
    const { 
      motivation, 
      choice, 
      respect, 
      lifeDescription, 
      communityOffer, 
      age, 
      platform, 
      gamerType, 
      referral,
      // Registration data from the previous step
      email,
      username,
      password
    } = await request.json()

    // Validation for quiz data
    if (!motivation || !choice || !respect || !lifeDescription || !communityOffer || !age || !platform || !gamerType) {
      return NextResponse.json(
        { error: 'Toate câmpurile obligatorii trebuie completate' },
        { status: 400 }
      )
    }

    // Validation for registration data
    if (!email || !username || !password) {
      return NextResponse.json(
        { error: 'Datele de înregistrare lipsesc. Te rugăm să începi din nou procesul de înregistrare.' },
        { status: 400 }
      )
    }

    // Check if user already exists
    const { data: existingUser, error: checkError } = await supabaseAdmin
      .from('users_tabel')
      .select('id')
      .or(`email.eq.${email},name.eq.${username}`)

    if (checkError) {
      console.error('Error checking existing user:', checkError)
      return NextResponse.json(
        { error: 'Eroare la verificarea utilizatorului' },
        { status: 500 }
      )
    }

    if (existingUser && existingUser.length > 0) {
      return NextResponse.json(
        { error: 'Email-ul sau username-ul există deja' },
        { status: 409 }
      )
    }

    // Hash password
    const saltRounds = 12
    const passwordHash = await bcrypt.hash(password, saltRounds)

    // Get current timestamp
    const now = new Date().toISOString()

    // Create user account in Supabase
    const { data: newUser, error: createUserError } = await supabaseAdmin
      .from('users_tabel')
      .insert([
        {
          email,
          name: username,
          password_hash: passwordHash,
          has_access: false,
          created_at: now,
          updated_at: now,
        }
      ])
      .select('id, email, name, has_access, created_at')
      .single()

    if (createUserError) {
      console.error('Error creating user:', createUserError)
      return NextResponse.json(
        { error: 'Eroare la crearea contului' },
        { status: 500 }
      )
    }

    // Store quiz data in Supabase
    const { data: quizSubmission, error: createQuizError } = await supabaseAdmin
      .from('quiz_submissions')
      .insert([
        {
          user_id: newUser.id, // Link quiz to the newly created user
          motivation,
          choice,
          respect,
          life_description: lifeDescription,
          community_offer: communityOffer,
          age: parseInt(age),
          platform,
          gamer_type: gamerType,
          referral: referral || null,
          created_at: now,
        }
      ])
      .select('id, created_at')
      .single()

    if (createQuizError) {
      console.error('Error creating quiz submission:', createQuizError)
      return NextResponse.json(
        { error: 'Eroare la salvarea răspunsurilor' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      message: 'Cont creat cu succes și quiz completat!',
      user: {
        id: newUser.id,
        email: newUser.email,
        username: newUser.name,
        has_access: newUser.has_access,
      },
      submission: {
        id: quizSubmission.id,
        created_at: quizSubmission.created_at,
      }
    }, { status: 201 })

  } catch (error) {
    console.error('Quiz submission error:', error)
    return NextResponse.json(
      { error: 'Eroare internă a serverului' },
      { status: 500 }
    )
  }
}
