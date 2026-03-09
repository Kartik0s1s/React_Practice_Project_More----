import { use, useState } from 'react'
import './App.css'
import User from './User'
import College from './College'

function App() {

 let user1={
  name : "Kartik",
  age  : 22,
  city : "Pune"
 }

 let user2={
  name : "Kartik",
  age  : 22,
  city : "Pune"
 }


  
 let clgList=["iit" ,"iim", "abc", "cde", "fgh" ]
  return (
    <>
     <h1>Learning props</h1>
     <User props= {user1}  />
     <User props= {user2}  />

     
      <College clgList={clgList}/>
     
    </>
  )
}

export default App
