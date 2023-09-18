import React from 'react'

export default function Alert(props) {
    return (
            <div className=' mb-3 ' style={{height: '40px'}}>
           {props.alert && <div className={`alert alert-${props.alert.type}`} role="alert">
           <strong>Success: </strong> {props.alert.msg}
            </div>}
            </div>
    )
}