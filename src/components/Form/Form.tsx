import { formatNumber } from 'helpers'
import style from './styles.module.css'
import { ChangeEventHandler, FormEventHandler, useCallback, useState } from 'react'

export const Form = ({ onFormSubmit, isPending }: { onFormSubmit: any; isPending: boolean }) => {
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')

  const handleNumberChange: ChangeEventHandler<HTMLInputElement> = useCallback((event) => {
    const inputValue = event.target.value
    const formattedValue = formatNumber(inputValue)
    setNumber(formattedValue)
  }, [])

  const handleSubmit: FormEventHandler<HTMLFormElement> = useCallback(
    (event) => {
      event.preventDefault()
      onFormSubmit(email, number)
    },
    [email, number, onFormSubmit]
  )

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <div className={style.inputWrapper}>
        <label htmlFor='email'>Email</label>
        <input
          required
          type='email'
          id='email'
          placeholder='john@gmail.com'
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div className={style.inputWrapper}>
        <label htmlFor='number'>Number</label>
        <input maxLength={8} type='text' id='number' placeholder='22-11-22' value={number} onChange={handleNumberChange} />
      </div>
      <button type='submit' className={style.button} disabled={isPending}>
        {isPending ? 'Sending...' : 'Send Request'}
      </button>
    </form>
  )
}
