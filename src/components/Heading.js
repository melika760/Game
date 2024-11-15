import React, { useEffect, useState } from 'react'
import logo from "../images/logo.svg"
import styles from "./Heading.module.css"
import { useScore } from './context/ScoreContext'
const Heading = () => {
  const {score}=useScore()
  const[animate,setanimate]=useState(false)
  useEffect(()=>{
setanimate(true)
const timeout=setTimeout(()=>setanimate(false),500)
return()=>clearTimeout(timeout)
  },[score])
  return (
  <header className={styles.heading}>
   
<img src={logo} alt='logo' className={styles.Img}/>
<div className={styles.contents}>
<p>Score</p>
<h2 className={animate && styles.animate}>{score}</h2>
   
</div>
  </header>
  )
}

export default Heading
