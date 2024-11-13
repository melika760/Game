import React, { useContext, useEffect, useState } from "react";
export const ScoreContext=React.createContext(null)
export const useScore=()=>useContext(ScoreContext);
export const Contextprovider=({children})=>{
  const [score,setscore]=useState(10)
const UpdateResult=(result)=>{
    const incrementScore = () => {
        setscore((prevScore) => prevScore + 1);
      };
    
     
      const decrementScore = () => {
        setscore((prevScore) => (prevScore > 0 ? prevScore - 1 : 0));
      };
    
if(result==="win"){
   incrementScore()
}else if(result==="lose" && score>0){
    decrementScore()
}
}
return(
    <ScoreContext.Provider value={{score,UpdateResult}}>
        {children}
    </ScoreContext.Provider>
)
}