import React, { useContext, useState } from "react";
export const ScoreContext=React.createContext(null)
export const useScore=()=>useContext(ScoreContext);
export const Contextprovider=({children})=>{
  const [score,setscore]=useState(0)
  const[ScoreLimit,setScoreLimit]=useState(5)
  const setLimit=(limit)=>{
    setScoreLimit(limit)
  }
const UpdateResult=(result)=>{
    const incrementScore = () => {
        setscore((prevScore) =>(prevScore<ScoreLimit ? prevScore+1:prevScore));
      };
    
     
      const decrementScore = () => {
        setscore((prevScore) => (prevScore > 0 ? prevScore - 1 : 0));
      };
    
if(result==="win"){
   incrementScore()
}else if(result==="lose" && score>0){
    decrementScore()
}else if(result==="done"){
  setscore(0)
}
}
return(
    <ScoreContext.Provider value={{score,UpdateResult,setLimit,ScoreLimit}}>
        {children}
    </ScoreContext.Provider>
)
}