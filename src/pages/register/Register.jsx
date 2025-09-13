import styles from "../register/register.module.css";
import React from 'react'

const Register = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Register</h1>
      <form className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.label}>Name</label>
          <input type="text" id="name" className={styles.input} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>Email</label>
          <input type="email" id="email" className={styles.input} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password" className={styles.label}>Password</label>
          <input type="password" id="password" className={styles.input} />
        </div>
        <button type="submit" className={styles.button}>Register</button>
      </form>
    </div>
  )
}

export default Register