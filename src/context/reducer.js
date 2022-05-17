import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from "./actions";

const todoReducer = (state, action) => {
    switch (action.type) {
        case ADD_TODO:
        return {
            ...state, 
            todos: [ ...state.todos, action.payload]
        }   
        case TOGGLE_TODO:
            return {

            } 
        case DELETE_TODO: 
        return {

        }
        
        default: 
        return state;
    }
}

export default todoReducer