import { BASE_URL } from './api'

interface RegisterBody {
  email: string
  password: string
  username: string
}

interface LoginBody {
  email: string
  password: string
}

export const signUp = async (body: RegisterBody) => {
  try {
    const response = await fetch(BASE_URL + '/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON'
      },
      body: JSON.stringify(body)
    })

    if (!response.ok) throw new Error('Registration went wrong')
    const data = await response.json()
    return data
  } catch (err) {
    console.log(err)
  }
}

export const login = async (body: LoginBody) => {
  try {
    const response = await fetch(BASE_URL + '/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON'
      },
      body: JSON.stringify(body)
    })

    if (!response.ok) throw new Error('Registration went wrong')
    const data = await response.json()
    return data
  } catch (err) {
    console.log(err)
  }
}
