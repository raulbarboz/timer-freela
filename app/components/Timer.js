import React from 'react';
import moment from 'moment';

function Timer(props) {
    return(
        <>
            {props.tasks.map((task) => {
                const a = moment.unix(task.start).toDate();
                const x = moment(a)
                const b = moment.unix(task.stop).toDate();
                const y = moment(b)
                //const result = b.diff(a)
                console.log(y.diff(x, 'minutes'))
                return <div key={task.id}>{} {}</div>
            })}
        </>
    )
}

export default Timer;