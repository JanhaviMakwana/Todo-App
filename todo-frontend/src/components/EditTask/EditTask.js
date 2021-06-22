import React, { useState } from 'react';
import { withState } from '../../todo-context';
import TodoService from '../../services/TodoService';
import './EditTask.css';

const EditTask = (props) => {
    const [task, setTask] = useState(props.currentTask.description);

    const taskChangeHandler = (event) => {
        setTask(event.target.value);
    };

    const taskUpdateHandler = (event) => {
        event.preventDefault();
        const id = props.currentTask.id;
        TodoService.updateTask(id, { task: task })
            .then(res => {
                props.setTodoList(res.data);
                props.setCurrentTask();
            }).catch(err => {
                props.setError(err.message);
                console.log(err);
            })
    };

    const taskDeleteHandler = () => {
        const id = props.currentTask.id;
        TodoService.deleteTask(id)
            .then(res => {
                props.setTodoList(res.data);
                props.setCurrentTask();
            })
            .catch(err => {
                props.setError(err.message);
                console.log(err);
            })
    };

    return (
        <div className="editTask">
            <div className="editTask_form">
                <form onSubmit={taskUpdateHandler}>
                    <input
                        value={task}
                        onChange={taskChangeHandler}
                    />
                    <div>
                        <button className="btn" type="submit">UPDATE</button>
                        <button className="btn danger" onClick={taskDeleteHandler}>DELETE</button>
                        <button className="btn" onClick={() => props.setCurrentTask()}>CANCEL</button>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default withState(EditTask);