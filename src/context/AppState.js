import React, { useReducer, useState } from 'react'
import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from './actions'
import AppContext from './app-context'
import todoReducer from './reducer'


const AppState = (props) => {

    const [isAuth, setIsAuth] = useState(false)

    const initialState = {
        todos: []
    }

    const [state, dispatch] = useReducer(todoReducer, initialState)

// add to do 
const addToDo = (todo) => {
    dispatch({
        type: ADD_TODO, 
        payload: todo
    })
}

// toggle to do 
const toggleTodo = (todoId) => {
    dispatch({
        type: TOGGLE_TODO, 
        payload: todoId
    })
}

// delete a todo 
const deleteTodo = (todoId) => {
    dispatch({
        type: DELETE_TODO, 
        payload: todoId
    })
}
  return (
    <AppContext.Provider value={{
        message: 'Thjis is from from context', 
        isAuth, 
        setIsAuth, 
        todos: state.todos, 
        addToDo, 
        toggleTodo, 
        deleteTodo
    }}>
        {props.children}
    </AppContext.Provider>
  )
}


export default AppState