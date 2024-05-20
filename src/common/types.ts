export interface User {
  id: string
  email: string
  password: string
  imageUrl?: string
  username: string
}

export interface Recipe {
  _id: string
  author: string
  title: string
  description: string
  imageUrl: string
}
