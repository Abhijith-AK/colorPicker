import React, { useState } from 'react'

const ColorPicker = () => {

    const [color, setColor] = useState("#ffffff")

    const handleChangeColor = (event) => {
        setColor(event.target.value)
    }    

    const buttonChangeColor = (color) => {
        setColor(color)
    }

    return (
        <div className='container' style={{backgroundColor: color}}>
            <div className='colorPicker'>
                <h1>Background Color Changer</h1>
                <h2>Current color:</h2>
                <h2>{color}</h2>
                <div className="buttons">
                    <button style={{backgroundColor:"#FF0000"}} onClick={() => buttonChangeColor("#FF0000")}>Red</button>
                    <button style={{backgroundColor:"#0000FF"}} onClick={() => buttonChangeColor("#0000FF")}>Blue</button>
                    <button style={{backgroundColor:"#00FF00"}} onClick={() => buttonChangeColor("#00FF00")}>Green</button>
                    <button style={{backgroundColor:"#FFFF00"}} onClick={() => buttonChangeColor("#FFFF00")}>Yellow</button>
                </div>
                <h2>Select a Specific color</h2>
                <input type="color" value={color} onChange={handleChangeColor} />
            </div>
        </div>
    )
}

export default ColorPicker