import { useState, createContext } from 'react';

const TodoContext = createContext();

const StateProvider = (props) => {
    const [todoList, setTodoList] = useState([]);
    const [currentTask, setCurrentTask] = useState();
    const [error,setError] =useState();

    return (
        <TodoContext.Provider value={{ todoList, setTodoList, currentTask, setCurrentTask, error, setError }}>
            {props.children}
        </TodoContext.Provider>
    );
};

const withState = (Child) => (props) => (
    <TodoContext.Consumer>
        {(context) => <Child {...props} {...context} />}
    </TodoContext.Consumer>
);

export { StateProvider, withState };