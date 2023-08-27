import React from 'react'
import ListItem from '../components/ListItem'

const List = (props) => {
    return (
        <div className="overflow-container" ref={props.tasksContainerRef}>
            {props.combineTasks && props.combineTasks.map((task) => (
                <ListItem
                    key={task.id}
                    task={task}
                    handleToggleComplete={props.handleToggleComplete}
                    handleDeleteTask={props.handleDeleteTask}
                />
            ))}
        </div>
    )
}

export default List
