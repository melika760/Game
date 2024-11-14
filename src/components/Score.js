import React, { useEffect, useState } from 'react'
import styles from "./Score.module.css"
import { useScore } from './context/ScoreContext'
export const RadioGroup=({onChange,selected,children})=>{
    const Radiooptions=React.Children.map(children,(child)=>{
        return React.cloneElement(child,{
            onChange,
            checked:child.props.value===selected
        })
    })
  return (
    <div className={styles.radioGroup}>
      {Radiooptions}
    </div>
  )
}
export const RadioOption=({value,checked,onChange,children})=>{
return(
    <div className={styles.radioOption} style={{ background: checked ? "rgb(146, 90, 173)" : "rgb(142, 135, 176)" }}>
        <input id={value} type='radio' name={value} value={value} checked={checked} onChange={(e)=>{onChange(e.target.value)}}/>
        <label htmlFor={value}>{children}</label>
    </div>
)
}
const Score = () => {
    const[selected,setselected]=useState("")
    const {setLimit}=useScore()

    // useEffect(()=>{
    //     console.log(selected)
    //     if(selected){
    //         setLimit(selected)
    //     }
    // },[selected,setLimit])
  
   return(<div className={styles.Wraper}>
      <RadioGroup onChange={setselected} selected={selected}>
        <RadioOption value={5}>Score 5</RadioOption>
        <RadioOption value={10}>Score 10</RadioOption>
        <RadioOption value={15}>Score 15</RadioOption>
    </RadioGroup>
   </div>
  
   )
}
export default Score
