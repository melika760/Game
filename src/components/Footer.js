import React from 'react'
import styles from "./Footer.module.css"
import overleys from "../images/image-rules.svg"
import closed from "../images/icon-close.svg"
const Footer = () => {
    const openModal=()=>{
        document.getElementById("modal").showModal()
    }
    const closeModal=()=>{
      document.getElementById("modal").close();
    }
  return (
    <footer>
      <button className={styles.btn} type='button'onClick={openModal}>Rules</button>
      <dialog id='modal' onClick={closeModal}>
<div className={styles.overley}>
<div className={styles.modal}>
  <div className={styles.closes}>
  <h3>Rules</h3>
<img src={closed} alt='Close' width={20} height={20} onClick={closeModal} className={styles.closeButton}/>

  </div>

<div className={styles.modalContent}>
<img src={overleys} alt='roles' width={250} height={250}/>
</div>

</div>
</div>
      </dialog>
    </footer>
  )
}

export default Footer
