import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseEffect = (props) => {
    {/* Exercicio 01*/}
    
    function calcFatorial(num) {
        const n = parseInt(num)
        if(n < 0) return -1
        if(n === 0) return 1
        return (
            calcFatorial(n - 1) * n
        )
    }

    const [ number, setNumber] = useState(1)
    const [ fatorial, setFatorial ] = useState(1)

    useEffect(function() {
        setFatorial(calcFatorial(number))
    }, [number])

    useEffect(function() {
        if(fatorial > 100000) {
            document.title = 'Passou de 1 milhão'
        }
    }, [fatorial])

    useEffect(function() {
        if(fatorial < 100000) {
            document.title = 'React app'
        }
    }, [fatorial])

    {/* Exercicio 02 */}

    function par(num) {
        const n = parseInt(num)

        return (
            n % 2 === 0 ? 'Par' : 'Impar'
        ) 
    }

    const [ value, setValue ] = useState(1)
    const [ valueParImpar, setValueParImpar ] = useState(1)

    useEffect(function() {
        setValueParImpar(par(value))
    }, [value])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />

            <SectionTitle title="Exercicio #01" />
                <div className="center">
                    <div>
                        <span className="text">Fatorial: </span>
                        <span className="text red">{ fatorial === -1 ? 'Não Existe' : fatorial }</span>
                    </div>

                    <input 
                        type="number" 
                        className="input"
                        value={number} 
                        onChange={(e) => setNumber(e.target.value)} />
                </div>
            
                <SectionTitle title="Exercicio #02" />
                    <div className="center">
                        <div>
                            <span className="text">Status: </span>
                            <span className="text red">{ valueParImpar }</span>
                        </div>

                        <input 
                            type="number" 
                            className="input" 
                            value={value} 
                            onChange={e => setValue(e.target.value)}  />
                    </div>
        </div>

        
    )
}

export default UseEffect
