import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '../../../../lib/supabase-admin'

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json(
        { error: 'Email-ul este obligatoriu' },
        { status: 400 }
      )
    }

    // Check if user exists and has access
    const { data: user, error } = await supabaseAdmin
      .from('users_tabel')
      .select('id, email, name, has_access')
      .eq('email', email)
      .single()

    if (error) {
      console.error('Error checking user access:', error)
      return NextResponse.json(
        { error: 'Eroare la verificarea utilizatorului' },
        { status: 500 }
      )
    }

    if (!user) {
      return NextResponse.json(
        { error: 'USER_NOT_FOUND' },
        { status: 404 }
      )
    }

    if (!user.has_access) {
      return NextResponse.json(
        { error: 'NO_ACCESS' },
        { status: 403 }
      )
    }

    return NextResponse.json({
      message: 'Utilizatorul are acces',
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        has_access: user.has_access
      }
    }, { status: 200 })

  } catch (error) {
    console.error('Check access error:', error)
    return NextResponse.json(
      { error: 'Eroare internă a serverului' },
      { status: 500 }
    )
  }
}
