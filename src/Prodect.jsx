import React from 'react'

export default function prodect(props) {
    return (
        <div className='col-md-4 mb-4 bg-info'>
            <h2>{props.title}</h2>
            <p>{props.desc}</p>
            <p>{props.price}</p>
        </div>
    )
}



