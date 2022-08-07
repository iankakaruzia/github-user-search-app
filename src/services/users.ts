import { api } from './api'

export type User = {
  id: number
  name: string | null
  login: string
  bio: string | null
  avatar_url: string
  created_at: string
  public_repos: number
  followers: number
  following: number
  location: string | null
  blog: string | null
  twitter_username: string | null
  company: string | null
}

export async function getUserInfo(username: string) {
  const { data } = await api.get<User>(`/users/${username}`)

  return data
}
