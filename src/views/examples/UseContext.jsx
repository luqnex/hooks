import React, { useContext, useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'

import DataContext from '../../data/DataContext'

import SectionTitle from '../../components/layout/SectionTitle'

import { AppContext } from '../../data/Store'

const UseContext = (props) => {

    const context = useContext(DataContext)

    const {number, text, setNumber} = useContext(AppContext)

    return (
        <div className="useContext">
            <PageTitle 
                title="Hook UseContext"
                subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto" />
            
            <SectionTitle title="Exercicio #2" />
            <div className="center">
                <span className="text">{context.text}</span>
                <span className="text">{context.number}</span>
            </div>

            <SectionTitle title="Exercicio #2" />
                <div className="center">
                    <span className="text">{text}</span>
                    <span className="text">{number}</span>
                    <div>
                        <button 
                            className="btn"
                            onClick={() => setNumber(number - 1)}>
                            -1
                        </button>

                        <button 
                            className="btn"
                            onClick={() => setNumber(number + 1)}>
                            +1
                        </button>
                    </div>
                </div>    
                    
            </div>
    )
}

export default UseContext
