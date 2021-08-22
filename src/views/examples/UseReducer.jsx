import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'

import { initialState, reducer} from '../../store/index'

const UseReducer = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)
 
    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />

            <div className="center">
                {state.user ? <span className="text">{ state.user.name }</span> : <span className="text">Sem usuario</span> }
                
                <span className="text">{state.number}</span>
                <div>
                    <button 
                        className="btn"
                        onClick={() => dispatch({ type: 'login', payload: 'Lucas' })}>Login</button>

                    <button 
                        className="btn"
                        onClick={() => dispatch({type: 'number_add2'})}>+2</button>

                    <button 
                        className="btn"
                        onClick={() => dispatch({type: 'multiplicarPor7'})}>x7</button>
                    
                    <button 
                        className="btn"
                        onClick={() => dispatch({type: 'dividirPor25'})}>/25</button>
                    
                    <button 
                        className="btn"
                        onClick={() => dispatch({type: 'inteiro'})}>inteiro</button>

                    <button 
                        className="btn"
                        onClick={() => dispatch({type: 'addNum', payload: -9})}>-9</button>

                    <button 
                        className="btn"
                        onClick={() => dispatch({type: 'addNum', payload: +11})}>+11</button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
