import React from 'react'
import styles from "./Footer.module.css"
const Footer = () => {
    const openModal=()=>{
        document.getElementById("modal").showModal()
    }
  return (
    <footer>
      <button className={styles.btn} type='button'onClick={openModal}>Rules</button>
      <dialog id='modal'>

      </dialog>
    </footer>
  )
}

export default Footer
