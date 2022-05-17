import React, { useContext } from 'react'

import appContext from '../context/app-context'

const Home = () => {

    const {message, isAuth, setIsAuth} = useContext(appContext)

  return (
      <div style={{background: isAuth ? 'green' : 'red'}}>

        <div>Home i am from home page</div>
            <p>{message}</p>

        {isAuth ? <button onClick={() => setIsAuth(false)}>Logout</button> : <button onClick={() => setIsAuth(true)}>Logged in</button>}
      </div>
    
  )
}

export default Home