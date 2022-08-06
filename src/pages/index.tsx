import type { NextPage } from 'next'
import { api } from 'services/api'

type User = {
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

type Props = {
  defaultUser: User
}

const Home: NextPage<Props> = ({ defaultUser }) => {
  return (
    <div>
      <h1 className='text-base'>Hello</h1>
    </div>
  )
}

export async function getServerSideProps() {
  const { data } = await api.get<User>('users/octocat')

  return {
    props: {
      defaultUser: data
    }
  }
}

export default Home
