import React, { useContext } from 'react'

import appContext from '../context/app-context'

const Page = () => {

    const {message, todos, addToDo} = useContext(appContext)


    const submitHandle = () => {
        const newtodo = {
            id: Math.random(), 
            text: 'mytext',
            complete: false
        }

        addToDo(newtodo)
    } 


    console.log(todos)
  return (
      <>

<div>Page</div>
    {message}
<br />
<button onClick={submitHandle}>add to do </button>




      </>
    
  )
}

export default Page