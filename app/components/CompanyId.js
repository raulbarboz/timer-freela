import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startSetTasks, startAddTask} from '../actions/tasks';
import Timer from './Timer';
import moment from 'moment';

function CompanyId(props) {
    const dispatch = useDispatch();
    const id = props.match.params.id;

    const tasks = useSelector(state => state.tasks)

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
        dispatch(startSetTasks(id))
        if(start && stop){
            dispatch(startAddTask(start, stop, id))
        }
    }, [stop])

    return(
        <>
            <h1>companyid{props.match.params.id}</h1>
            <button type='button' onClick={handlerAction}>{action}</button>
            <Timer tasks={tasks}/>
        </>
    )
}

export default CompanyId;