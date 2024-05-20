import { BASE_URL, GET_METHOD } from './api'

export const getRecipes = async (token: string) => {
  try {
    const response = await fetch(BASE_URL + 'recipes', GET_METHOD(token))
    if (!response.ok) throw new Error('Something went wrong')
    const data = await response.json()
    return data
  } catch (err) {
    console.log(err)
  }
}
