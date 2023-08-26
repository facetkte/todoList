import React from 'react'

const ToggleButton = ({ tasks }) => {
    const completedTasks = tasks.length > 0 ? tasks.filter(task => task.completed) : 0;
    const completedTaskCount = completedTasks.length;

    const handleToggle = () => {
        console.log(`Completed tasks: ${completedTaskCount}`);
    }

    return (
        <>
            <label className="toggle-label">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="w-12 h-6 bg-white  peer-focus:ring-purple-1 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-none peer-checked:after:bg-white after:absolute after:top-[2px] after:left-[2px] after:bg-purple-1 after:border-none after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-purple-1 "
                    onClick={handleToggle}
                />
            </label>
        </>
    )
}

export default ToggleButton
