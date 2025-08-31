import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { email, username, password } = await request.json()

    // Validation
    if (!email || !username || !password) {
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

    // Store temporary registration data in session/cookie
    // This will be used later when creating the actual account after quiz completion
    const tempRegistrationData = {
      email,
      username,
      password,
      timestamp: new Date().toISOString()
    }

    // For now, we'll just return success and redirect to quiz
    // The actual account creation will happen in the quiz completion endpoint
    return NextResponse.json({
      message: 'Datele au fost salvate temporar. Completează quiz-ul pentru a-ți crea contul.',
      tempData: {
        email,
        username,
        hasAccess: false
      }
    }, { status: 200 })

  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json(
      { error: 'Eroare internă a serverului' },
      { status: 500 }
    )
  }
}
