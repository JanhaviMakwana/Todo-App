import React from 'react';
import { withState } from '../../todo-context';
import './ListTasks.css';

const ListTasks = (props) => {
    if(props.todoList.length === 0) {
        return <p>No Tasks</p>
    }
    return (
        <div>
            <ul className="todo_list">
                {props.todoList.map(task => {
                    return <li
                        className="todo_item"
                        key={task.id}
                        onClick={() => props.setCurrentTask(task)}>
                        {task.description}
                    </li>
                })}
            </ul>
        </div>
    );

}
export default withState(ListTasks);