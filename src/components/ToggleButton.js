import React from 'react'

const ToggleButton = (props) => {

    const handleToggle = () => {
        props.setBtnToggle(prevToggle => !prevToggle);
    }

    return (
        <>
            <label className="relative inline-flex items-center cursor-pointer ml-4">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="w-12 h-6 bg-white rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-none peer-checked:after:bg-white after:absolute after:top-[2px] after:left-[2px] after:bg-purple-1 after:border-none after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-2 "
                    onClick={handleToggle}
                />
            </label>
        </>
    )
}

export default ToggleButton
