
import styles from "./Result.module.css"
const Result = ({selectedItem,housepicked,win,setcontent}) => {
let content=<div className={styles.results}>
<p className={styles.wins}>You {win}</p>
<button type="button" onClick={()=>setcontent(false)}>Play again</button>
</div>
  return (
    <section className={styles.wraper}>
      <div className={styles.wrap}>
      <div className={styles.container}>
        <p>You Picked</p>
      <div className={styles.imgwrap} style={{border:`20px solid ${selectedItem.bordercolor}`}}>
      <img src={selectedItem.img} alt={selectedItem.name} width={70} height={70}/>
      </div>
      </div>
    
      <div className={styles.container}>
      <p>The House Picked</p>
      <div className={styles.imgwrap} style={{border:`20px solid ${housepicked.bordercolor}`}}>
      <img src={housepicked.img} alt={housepicked.name} width={70} height={70}/>
      </div>
      </div>
      </div>
  
     {content} 
    </section>
  )
}

export default Result
