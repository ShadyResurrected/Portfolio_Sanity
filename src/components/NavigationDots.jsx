import { Tooltip } from '@mui/material'
import React from 'react'

const NavigationDots = ({ active }) => {
    return (
        <div className='app__navigation'>
            {['home', 'about', 'work', 'skills', 'contact'].map((item,index) => (
                <Tooltip title={item.toUpperCase()} placement="left-start">
                    <a 
                    href={`#${item}`} 
                    key={item+index} 
                    className='app__navigation-dot'
                    style={active === item ? {backgroundColor: '#ffc9c9'}:{}} 
                    onClick={() => setToggle(false)}/>
                    </Tooltip>
            ))}
        </div>
    )
}

export default NavigationDots