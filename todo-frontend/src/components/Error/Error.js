import {withState} from '../../todo-context';
import './Error.css';

const Error = (props) => {

    const backhandler = () => {
        props.setError();
    } 

    return (
        <div className="error" onClick={backhandler}>
            <p>{props.error}</p>
        </div>
    );
};

export default withState(Error);