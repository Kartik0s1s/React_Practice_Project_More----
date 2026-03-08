import { useState } from "react"

 
function Counter15(){
    const [count, setCount]= useState(0);
    const [rCount, setRcount] = useState(10);
    console.log(rCount)
    return (
    <div>
        <h1>{count}</h1>
        <h1>{rCount}</h1>
         <button onClick={()=>setCount(count+1)} >Counter Badhao</button>
         <button onClick={()=>setRcount(rCount-1)} >ReverseCounter</button>
    </div>
    )
}

 export default Counter15;