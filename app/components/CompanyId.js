import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { startAddTask} from '../actions/tasks';
import moment from 'moment';

function CompanyId(props) {
    const dispatch = useDispatch();
    const [action, setAction] = useState('Start');
    const [start, setStart] = useState();
    const [stop, setStop] = useState();

    const handlerAction = () => {
        if(action === 'Start'){
            setAction('Stop');
            setStart(moment().valueOf())
        }else{
            setAction('Start')
            setStop(moment().valueOf())
        }
    }
    
    useEffect(() => {
        if(start && stop){
            dispatch(startAddTask(start, stop, props.match.params.id))
        }
    }, [stop])

    return(
        <>
            <h1>companyid{props.match.params.id}</h1>
            <button type='button' onClick={handlerAction}>{action}</button>
        </>
    )
}

export default CompanyId;