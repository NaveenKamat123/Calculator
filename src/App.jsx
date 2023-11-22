import { useState } from 'react'

import Display from './components/Display';
import styles from "./App.module.css"
import ButtonsContainer from './components/ButtonsContainer'
function App() {

  let[calValue,setCalValue]=useState("");

  const onButtonClick=(buttonText)=>{
    if(buttonText==='C')
    {
     setCalValue("");
    }
    
    else if(buttonText==='=')
    {
    const newDisplayValue=eval(calValue);
    setCalValue(newDisplayValue);
    }

    else{
     
      const newDisplayValue=calValue+buttonText;
      setCalValue(newDisplayValue);
    
    }


  }

 

  return (
    <>
    <div className={styles.calculator}>
      <span>Calculator</span>
    <Display displayValue={calValue} ></Display>
    
     
      <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>
      
    </div>
    </>
  )
}

export default App
