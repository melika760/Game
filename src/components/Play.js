import React, { Fragment, useState } from 'react'
import styles from "./Play.module.css"
import paper from "../images/icon-paper.svg"
import rock from "../images/icon-rock.svg"
import scissors from "../images/icon-scissors.svg"
import Result from './Result'
import { useScore } from './context/ScoreContext'
import Score from './Score'


const Play = () => {
  const [content,setcontent]=useState(false)
  const[selectedItem,setItem]=useState({})
  const[housepicked,setHousepicked]=useState({})
 const {UpdateResult,ScoreLimit,score}=useScore();
 const[result,setresult]=useState(null)

const determineResult=(playerchoice,housechoice)=>{
  if((playerchoice==="Rock" && housechoice==="Scissors")||(playerchoice==="Scissors" && housechoice==="Paper")||(playerchoice==="Paper" && housechoice==="Rock")){
   return "win"
        } else if(playerchoice===housechoice){
          return "draw"
        }else{
          return "lose"
        }
}
 
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
  if(ScoreLimit && score >= ScoreLimit){
    UpdateResult("done")
    alert("YOU WIN THIS GAME 🎉!")
  }
  const randomIndex=Math.floor(Math.random()*Items.length)
  const randomItem=Items[randomIndex]
  setcontent(true);
  setItem(item)
  setHousepicked(randomItem);
  const gameResult=determineResult(item.name,randomItem.name);
 setresult(gameResult)
 UpdateResult(gameResult)

}
  return (<Fragment>
  
    {!content && 
<section className={styles.container}>
        <div className={styles.wrap}>
        {Items.map((item)=>{
   
return(
    <div className={styles.imgwrap} style={{border:`20px solid ${item.bordercolor}`}} onClick={()=>Checkdata(item)} key={item.id}>
        <img src={item.img} alt={item.name} width={70} height={70}/>
    </div>
  )
        })}
      </div>
    </section>
  
    
    }
    {content && <Result selectedItem={selectedItem} housepicked={housepicked} win={result} setcontent={setcontent}/>}
  </Fragment>
   
  )
}

export default Play
