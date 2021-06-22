import axios from '../axios';

class Todo {

    postTask(data) {
        return axios.post('/add-task', data);
    }

    getTasks() {
        return axios.get('/');
    }

    deleteTask(id) {
        return axios.get(`/${id}`);
    }

    updateTask(id, data) {
        return axios.post(`/${id}`, data);
    }
};

export default new Todo();