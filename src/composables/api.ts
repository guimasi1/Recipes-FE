export const BASE_URL = 'http://localhost:3000'
export const GET_METHOD = (token: string) => {
  return {
    headers: {
      Authorization: 'Bearer ' + token
    }
  }
}
