import React from 'react'
import { useContext } from 'react'
import { ColorProvider } from './ColorProvider';

const PanelButton = ({text}) => {
    let data = useContext(ColorProvider);
  return (
    <div>
        <button style = {{backgroundColor : data.color}}> {text} </button>
    </div>
  )
}

export default PanelButton