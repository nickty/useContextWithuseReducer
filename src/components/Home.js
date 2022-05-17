import React, { useContext } from 'react'

import appContext from '../context/app-context'

const Home = () => {

    const {message, isAuth, setIsAuth, todos, toggleTodo, deleteTodo} = useContext(appContext)

    console.log('from home page',todos)

  return (
      <div style={{background: isAuth ? 'green' : 'red'}}>

        <div>Home i am from home page</div>
            <p>{message}</p>

        {isAuth ? <button onClick={() => setIsAuth(false)}>Logout</button> : <button onClick={() => setIsAuth(true)}>Logged in</button>}


        {
            todos.map(i =>  (
                <h2>{i.text}</h2>
            ))
        }

      </div>
    
  )
}

export default Home