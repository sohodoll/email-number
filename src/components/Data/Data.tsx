import { User } from 'types'
import styles from './styles.module.css'

export const Data = ({ users, isPending }: { users: User[]; isPending: boolean }) => {
  return (
    <div>
      <h1>Users</h1>
      <ul className={styles.list}>
        {users.length === 0 && !isPending && <p>No users found</p>}
        {users.map((user, i) => (
          <li key={user.number + i} className={styles.item}>
            <p> {user.email} </p>
            <p> {user.number} </p>
          </li>
        ))}
      </ul>
    </div>
  )
}
