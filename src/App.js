import "./styles.css";
import {useState} from "react";

export default function App() {
  const [number , setNumber]=useState(1);
  return (
    
    <div className="App">
      <div className="Center">
      <button onClick={()=>setNumber(number-1)}>-</button>{number}<button onClick={()=>setNumber(number+1)}>+</button>
      </div>
      </div>
  );
}
