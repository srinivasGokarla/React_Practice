import React, {useReducer} from 'react'

const UseReducer = () => {
    const intialData = 0;
 
    const reducer = (state, action) => {
        if(action.type === 'INCR') {
            state = state + 1
        }
        if( state > 0 && action.type === 'DECR') {
            state = state - 1
        }
        return state
    
    }
   const[state, dispatch] = useReducer(reducer, intialData)
  return (
    <div>
      <h1>UseReducer Practice</h1>
      <h5>{state}</h5>
      <button onClick={() => dispatch({type: "INCR"})}>+</button>
      <button onClick={() => dispatch({type: "DECR"})} >-</button>
    </div>
  )
}

export default UseReducer
