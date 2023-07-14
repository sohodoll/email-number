import { getUsers } from 'api/getUsers'
import { Data } from 'components/Data'
import { Form } from 'components/Form'
import { useCallback, useState } from 'react'
import { User } from 'types'

export const Main = () => {
  const [users, setUsers] = useState<User[]>([])
  const [isPending, setIsPending] = useState(false)

  const onFormSubmit = useCallback(async (email: string, number: string) => {
    setUsers([])
    setIsPending(true)

    try {
      const users = await getUsers(email, number.replaceAll('-', ''))
      setUsers(users)
    } catch (error) {
      console.error(error)
    } finally {
      setIsPending(false)
    }
  }, [])

  return (
    <div>
      <Form onFormSubmit={onFormSubmit} isPending={isPending} />
      <Data users={users} isPending={isPending} />
    </div>
  )
}
