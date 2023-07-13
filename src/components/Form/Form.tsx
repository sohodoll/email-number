import style from './styles.module.css'

export const Form = () => {
  return (
    <div>
      <form className={style.form}>
        <div className={style.inputWrapper}>
          <label htmlFor='email'>Email</label>
          <input type='email' id='email' placeholder='john@gmail.com' />
        </div>
        <div className={style.inputWrapper}>
          <label htmlFor='number'>Number</label>
          <input type='number' id='number' placeholder='221122' />
        </div>
        <button type='button' className={style.button}>
          Send Request
        </button>
      </form>
    </div>
  )
}
