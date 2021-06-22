import React from 'react';
import { withState } from '../../todo-context';
import AddTask from '../AddTask/AddTask';
import EditTask from '../EditTask/EditTask';
import ListTasks from '../ListTasks/ListTasks';
import TodoService from '../../services/TodoService';
import Error from '../Error/Error';
import './Home.css';

class Home extends React.Component {

    /* constructor(props) {
        super(props);
        this.state = {
            error: null
        }
    } */

    componentDidMount() {
        this.fetch();
    }
    /*  componentDidUpdate() {
         if (this.props.error !== null) {
             this.setState({ error: this.props.error });
             this.props.setError(null);
         }
     } */

    fetch = async () => {
        const todolist = await TodoService.getTasks();
        this.props.setTodoList(todolist.data);
    }

    render() {
        return (
            <div>
                {!this.props.error
                    ? <div className="home">
                        <div className="header">
                            <p>Make every second count</p>
                            <img src="../../../todoicon.png" alt="todoicon" />
                        </div>
                        {this.props.currentTask ?
                            <EditTask />
                            :
                            <AddTask />
                        }
                        <ListTasks />
                    </div>
                    :
                    <Error/>
                }
            </div>
        );
    }
}



export default withState(Home);