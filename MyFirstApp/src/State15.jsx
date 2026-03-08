import { useState } from "react"
function State() {
const [ fruit, setFruit]= useState("Apple");
function Fruit(){
    setFruit("banana");
}
    return (
        <div>
            <h1>{fruit}</h1>
         <button onClick={Fruit} >Change Fruit</button>
        </div>
    )
    
}
export default State; 