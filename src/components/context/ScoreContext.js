import React, { useContext, useEffect, useState } from "react";
export const ScoreContext=React.createContext(null)
export const useScore=()=>useContext(ScoreContext);
export const Contextprovider=({children})=>{
  const [score,setscore]=useState(0)
const UpdateResult=(result)=>{
if(result==="win"){
    setscore((prevScore)=>prevScore+1)
}else if(result==="lose" && score>0){
    setscore((prevScore)=>prevScore-1)
}
}
return(
    <ScoreContext.Provider value={{score,UpdateResult}}>
        {children}
    </ScoreContext.Provider>
)
}