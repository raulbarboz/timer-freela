import React from 'react';
import { useSelector } from 'react-redux';
import Entry from './Entry';
import Company from './Company';


function Content() {
    let data = useSelector(state => state.entry);
    return(
        <div className="container">
            <Entry />
            <Company {...data} />
        </div>
    )
}

export default Content;