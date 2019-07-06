import React from 'react';

function Company(props) {
    return(
        <>
            {props.data.map((co) => {
                return <div key={co.id}>{co.company}</div>
            })}
        </>
    )
}

export default Company;