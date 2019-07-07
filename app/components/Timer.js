import React from 'react';

function Timer(props) {
    return(
        <>
            {props.tasks.map((task) => {
                return <div key={task.id}>{task.start}</div>
            })}
        </>
    )
}

export default Timer;