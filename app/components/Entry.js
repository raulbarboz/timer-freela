import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addCompany } from '../actions/entry';

function Entry(){
    const dispatch = useDispatch();
    const [company, setCompany ] = useState('');

    const handlerInput = (e) => {
        const { value } = e.target;
        setCompany(value)
    }

    const handlerSubmit = (e) => {
        e.preventDefault();
        if(company){
            dispatch(addCompany(company))
            setCompany('')
        }
    }
    // useEffect to call function
    // After any update will send information to parent
    useEffect(() => {
       
    })

    return(
        <div className="entry">
            <form>
                <input 
                value={company}
                type="text" 
                name="company" 
                placeholder="Cadastrar nova empresa"
                onChange = { 
                    e => handlerInput(e)
                } />
                <button
                type="submit"
                onClick={
                    e => handlerSubmit(e)
                }
                >
                Enviar
                </button>
            </form>
        </div>
    )
}

export default Entry;