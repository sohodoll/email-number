import { User } from 'types'

export const getUsers = async (email: string, number: string): Promise<User[]> => {
  const response = await fetch('http://localhost:3005/search', {
    method: 'POST',
    body: JSON.stringify({ email, number }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const data = await response.json()
  return data
}
