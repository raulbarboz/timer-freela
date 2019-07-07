import React, { useState } from 'react';
import Container from './Container';

function CompanyId(props) {
    const [action, setAction] = useState('Start');
    const handlerAction = () => {
        if(action === 'Start'){
            setAction('Stop');
        }else{
            setAction('Start')
        }
    }
    return(
        <Container>
            <h1>companyid{props.match.params.id}</h1>
            <button type='button' onClick={handlerAction}>{action}</button>
        </Container>
    )
}

export default CompanyId;