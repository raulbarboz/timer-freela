import React from 'react';

function Output(props){
    return(
        <div className="output">
            <div className="output__box">
                <p>Com Plano:</p>
                <span 
                className="outpu__box--span">
                {
                   props.withPlan
                }
                </span>
            </div>
            <div className="output__box">
                <p>Sem Plano:</p>
                <span className="outpu__box--span">
                {
                    props.withoutPlan
                }
                </span>
            </div>
        </div>
    )
}

export default Output;