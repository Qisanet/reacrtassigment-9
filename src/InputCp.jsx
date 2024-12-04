import React, { useState } from 'react'

function inputCp() {
  const [myinput, setMyinput]= useState("")
  const Handleinput=(e)=>{
  //  console.log("event type", e.type)
  //  console.log("triggered element",e.target)

    setMyinput(e.target.value)
  }
  console.log(myinput)
  
  return (
    <div>
      <input type="text" value={myinput} onChange={Handleinput}/>
      <p>my input:{myinput}</p>
    </div>

  )
}

export default inputCp
