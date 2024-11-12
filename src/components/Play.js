import React from 'react'
import styles from "./Play.module.css"
import paper from "../images/icon-paper.svg"
import rock from "../images/icon-rock.svg"
import scissors from "../images/icon-scissors.svg"
const Play = () => {
    const Items=[
    {name:"Paper",
    img:paper,
    id:"Paper",
    color:"blue"
    },
    {name:"Scissors",
        img:scissors,
        id:"Scissors",
        color:"red"
        },
    {name:"Rock",
        img:rock,
        id:"rock",
        color:"yellow"
        }
        
]
  return (
    <section className={styles.container}>
        {Items.map((item)=>{
            let bordercolor;
        if(item.color==="blue"){
            bordercolor="rgb(41, 41, 188)"
        }else if(item.color==="red"){
            bordercolor="rgb(224, 46, 88)"
        }else{
            bordercolor="rgb(249, 216, 6)"
        }
return(<div className={styles.wrap}>
    <div className={styles.imgwrap} style={{border:`30px solid ${bordercolor}`}}>
        <img src={item.img} alt={item.name} width={70} height={70}/>
    </div>
  </div>)
        })}
      
      <div></div>
    </section>
  )
}

export default Play
