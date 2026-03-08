import { useState } from 'react'
import './App.css'
import Login, { Profile, Setting } from './login'
import Lecture12 from './Lecture12'
import State15 from './State15'
import Counter15 from './Counter15'
import User16 from './User16'
 

function App() {

       function call(){
         alert("Kya kiya re tune")
       }

       const  fruit =(name)=>{
        alert(name);
       }
     const [display, setDisplay] = useState(true);
       
    return (

      <div>
        <h1>This is My Fist Component </h1>
        <button onClick={call}>Click me </button>
        <button onClick={()=>fruit("apple")}>Apple</button>
        <button onClick={()=>fruit("banana")}>Banana</button>
          <Lecture12/>
         <State15/>
         <Counter15/>
         
        <button onClick={()=>setDisplay(!display)}>Profile</button>
         {
          display? <User16></User16>: null
         }


      </div>
    )
}














// function Fruit(){
//   return (
//     <div>
//       <h1>Apple</h1>
//       <Orange/>
//     </div>
//   )
// }


// function Orange(){
//   return(
//     <div>
//       <h1>Orange</h1>
//     </div>
//   )
// }

export default App
