import React from 'react'
import ToggleButton from '../components/ToggleButton'

const Toggle = (props) => {
    return (
        <div className='flex text-right max-w-[90%] mx-auto'>
            <p className='w-full text-blue-4 text-base-semibold'>Move done things to end?</p>
            <ToggleButton setBtnToggle={props.setBtnToggle} />
        </div>
    )
}

export default Toggle
