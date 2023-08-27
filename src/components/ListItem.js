import React from 'react'

const ListItem = (props) => {
    return (
        <div
            key={props.task.id}
            className={`bg-custom-gradient2 max-w-[90.5%] ml-[5%] flex my-2 py-4 rounded-md ${props.task.completed ? "completed" : ""}`}
        >
            <input
                className='list-item-input'
                type="checkbox"
                id={props.task.id}
                checked={props.task.completed}
                onChange={() => props.handleToggleComplete(props.task.id)}
            />
            {/* checkbox勾選後對已完成的選項新增文字刪除線 & 兩個空白延長刪除線 */}
            <span className={`overflow-hidden ml-2 w-full text-blue-4 text-body-large ${props.task.completed ? "line-through" : ""}`}>
                {props.task.text}{props.task.completed && <span>&nbsp;&nbsp;</span>}
            </span>
            <button className='text-right pr-8 text-body-large text-purple-1' onClick={() => props.handleDeleteTask(props.task.id, props.task.completed)}>
                x
            </button>
        </div>
    )
}

export default ListItem
