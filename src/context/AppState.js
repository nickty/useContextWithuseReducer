import React, { useState } from 'react'
import AppContext from './app-context'

const AppState = (props) => {

    const [isAuth, setIsAuth] = useState(false)

  return (
    <AppContext.Provider value={{
        message: 'Thjis is from from context', 
        isAuth
    }}>
        {props.children}
    </AppContext.Provider>
  )
}


export default AppState