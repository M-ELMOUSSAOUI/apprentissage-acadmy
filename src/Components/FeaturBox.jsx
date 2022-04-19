import React from 'react'

export default function FeaturBox(props) {
    return (
        <div className='a-box' >
            <div className='a-b-img'>
                <img src={props.image} alt='' />
                 </div>
            <div className='s-b-text' >
                <h2> {props.title} </h2>
                <p> Commodo voluptate id veniam sint aliquip eu sint ad magna enim duis. </p>
            </div>
        </div>
    )
}
