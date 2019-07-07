import React from 'react';
import { Link } from 'react-router-dom'

function Company(props) {
    return(
        <>
            {props.data.map((co) => {
                return <Link to={`/company/${co.id}`} key={co.id}>{co.company}</Link>
            })}
        </>
    )
}

export default Company;