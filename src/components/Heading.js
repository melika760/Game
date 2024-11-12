import React from 'react'
import logo from "../images/logo.svg"
import styles from "./Heading.module.css"
const Heading = () => {
  return (
  <header className={styles.heading}>
   
<img src={logo} alt='logo' className={styles.Img}/>
<div className={styles.contents}>
<p>Score</p>
<h2>12</h2>
   
</div>
  </header>
  )
}

export default Heading
