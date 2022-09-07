import { useRef,useState,useEffect } from 'react';


function UseRef() {
  const[timer,setTimer] = useState(0);
  let timerRef = useRef();

  useEffect(()=>{
    startTimer();
  })

const startTimer =  setInterval(()=>{
    setTimer(p => p + 1)
  },1000)
  return (
    <div className="App">
      <h3>{timer}</h3>
      <button onClick={()=>{
 startTimer();
      }}>start</button>
      <button onClick={()=>{
        clearInterval(timerRef.current)
        console.log(timerRef.current)
      }}>pause</button>
    
    </div>
  );
}

export default UseRef;