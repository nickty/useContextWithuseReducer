import React, { useContext } from 'react'

import appContext from '../context/app-context'

const Home = () => {

    const {message} = useContext(appContext)

  return (
      <>

<div>Home i am from home page</div>
    <p>{message}</p>
      </>
    
  )
}

export default Home