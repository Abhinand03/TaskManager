import React from 'react'
import { createContext,useState } from 'react'

export const updateSatus=createContext()

function Context({children}) {
    const [UPstatus,setUPstatus]=useState(false)
  return (
   <>
   <updateSatus.Provider value={{UPstatus,setUPstatus}}>
    {
        children
    }
   </updateSatus.Provider>
   </>
  )
}

export default Context