import React, { useContext } from 'react'

import appContext from '../context/app-context'

const Home = () => {

    const {message, isAuth} = useContext(appContext)

  return (
      <div style={{background: isAuth ? 'green' : 'red'}}>

<div>Home i am from home page</div>
    <p>{message}</p>
      </div>
    
  )
}

export default Home