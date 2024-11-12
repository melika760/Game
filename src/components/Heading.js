import React from 'react'
import logo from "../images/logo.svg"
import styles from "./Heading.module.css"
const Heading = () => {
  return (
  <header className={styles.heading}>
   
<img src={logo} alt='logo' className={styles.Img}/>
<div className={styles.content}>
    <p>Score</p>
    <h1>12</h1>
</div>
  </header>
  )
}

export default Heading
