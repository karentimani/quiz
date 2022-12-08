import { useState} from "react";
import First from "./pages/First";
import Questions from "./pages/Questions";
import Harry from "./pages/Harry";
import Louis from "./pages/Louis";
import Niall from "./pages/Niall";
import Zayn from "./pages/Zayn";
import Liam from "./pages/Liam";




function App() {


  const[step,setStep]=useState(1);


  const allStartHandler = () =>{
    setStep(2);

  }

  const harryStartHandler = () =>{
    setStep(3)
  }

  const louisStartHandler = () =>{
    setStep(4)
  }

  const niallStartHandler = () =>{
    setStep(5)
  }

  const zaynStartHandler = () =>{
    setStep(6)
  }

  const liamStartHandler = () =>{
    setStep(7)
  }

 
  
  

  return (
    <>

    <div>
      {step === 1 && <><First onQuizAll={allStartHandler}
      onQuizHarry={harryStartHandler}
      onQuizLouis={louisStartHandler} 
      onQuizNiall={niallStartHandler}
      onQuizZayn={zaynStartHandler} 
      onQuizLiam={liamStartHandler}  /></>}
       
      
      
      {step === 2 && <Questions />}
      {step === 3 && <Harry />}
      {step === 4 && <Louis/>}
      {step === 5 && <Niall/>}
      {step === 6 && <Zayn/>}
      {step === 7 && <Liam/>}
      


    </div></>
    
  );
}

export default App;
