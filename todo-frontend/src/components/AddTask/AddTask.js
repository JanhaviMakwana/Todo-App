import { useState } from 'react';
import { withState } from '../../todo-context';
import TodoService from '../../services/TodoService';
import './AddTask.css';

const AddTask = (props) => {

    const [task, setTask] = useState('');

    const taskChangeHandler = (event) => {
        setTask(event.target.value);
    };

    const taskPostHandler = (event) => {
        event.preventDefault();
        TodoService.postTask({ task: task })
            .then(res => {
                setTask('');
                props.setTodoList(res.data);
            })
            .catch(err => {
                props.setError(err.message);
                console.log(err);
            })
    };

    return (
        <div className="addTask">
            <div className="addTask_form">
                <form onSubmit={taskPostHandler}>
                    <input
                        type="text"
                        value={task}
                        onChange={taskChangeHandler}
                    />
                    <button className="btn" type="submit">ADD</button>
                </form>
            </div>
        </div>
    );

}

export default withState(AddTask);