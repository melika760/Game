import React, { Fragment, useEffect, useState } from 'react'
import styles from "./Play.module.css"
import paper from "../images/icon-paper.svg"
import rock from "../images/icon-rock.svg"
import scissors from "../images/icon-scissors.svg"
import Result from './Result'


const Play = () => {
  const [content,setcontent]=useState(false)
  const[selectedItem,setItem]=useState({})
  const[housepicked,setHousepicked]=useState({})
  const[win,setWin]=useState(false)
 
 
  useEffect(()=>{
    if((selectedItem.name==="Rock" && housepicked.name==="Scissors")||(selectedItem.name==="Scissors" && housepicked.name==="Paper")||(selectedItem.name==="Paper" && housepicked.name==="Rock")){
setWin(true)

    }
    else{
      setWin(false)
     
    }

  },[selectedItem,housepicked])

 
    const Items=[
    {name:"Paper",
    img:paper,
    id:"Paper",
    bordercolor:"rgb(41, 41, 188)"
    },
    {name:"Scissors",
        img:scissors,
        id:"Scissors",
         bordercolor:"rgb(224, 46, 88)"
        },
    {name:"Rock",
        img:rock,
        id:"rock",
        bordercolor:"rgb(249, 216, 6)"

        }
        
]
const Checkdata=(item)=>{
  const randomIndex=Math.floor(Math.random()*Items.length)
  const randomItem=Items[randomIndex]
  setcontent(true);
  setItem(item)
  setHousepicked(randomItem)

}
  return (<Fragment>
    {!content &&  <section className={styles.container}>
        <div className={styles.wrap}>
        {Items.map((item)=>{
   
return(
    <div className={styles.imgwrap} style={{border:`20px solid ${item.bordercolor}`}} onClick={()=>Checkdata(item)} key={item.id}>
        <img src={item.img} alt={item.name} width={70} height={70}/>
    </div>
  )
        })}
      </div>
    </section>}
    {content && <Result selectedItem={selectedItem} housepicked={housepicked} win={win} setcontent={setcontent}/>}
  </Fragment>
   
  )
}

export default Play
