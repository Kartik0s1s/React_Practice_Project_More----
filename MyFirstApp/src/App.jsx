import { useState } from 'react'
import './App.css'
import Login, { Profile, Setting } from './login'
import Lecture12 from './Lecture12'
 
 
 

function App() {

       function call(){
         alert("Kya kiya re tune")
       }
       
    return (
      <div>
        <h1>This is My Fist Component </h1>
        <button onClick={call}>Click me </button>
          <Lecture12/>
       
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
