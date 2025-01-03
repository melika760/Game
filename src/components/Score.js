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

    useEffect(()=>{
        
        if(selected){
          const limit=parseInt(selected)
            setLimit(limit)
            console.log(limit)
        }
    },[selected,setLimit])
  
   return(<div className={styles.Wraper}>
       <h2>Choose Your Target Score and Reach your selected score to win!</h2>
  
      <RadioGroup onChange={setselected} selected={selected}>
        <RadioOption value={"3"}>Score 3</RadioOption>
        <RadioOption value={"5"}>Score 5</RadioOption>
        <RadioOption value={"7"}>Score 7</RadioOption>
    </RadioGroup>
   </div>
  
   )
}
export default Score
