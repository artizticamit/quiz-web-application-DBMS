import React from 'react'

export default function Error() {
    let myStyle = {
        color:'red',
        fontSize: '30px',
        margin: 'auto',

    }
    return (
        <div>
            <h1 style={myStyle} >404! Error Page Not found or Bad Access</h1>
        </div>
    )
}
