import React from 'react'

const Panel = ({children}) => {
    let panelStyle = {
        backgroundColor : 'grey',
        padding : '20px',
        margin: "10px",
        color: '#fff',
        textAlign: 'center',
        borderRadius : '30px'
    }
  return (
    <div style = {panelStyle}>
        {children}
    </div>
  )
}

export default Panel