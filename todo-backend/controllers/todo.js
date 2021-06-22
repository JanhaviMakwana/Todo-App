const Todo = require('../models/todo');

exports.getTasks = async (req, res, next) => {
    try {
        const tasks = await Todo.findAll();
        return res.send(tasks);

    } catch (e) {
        return res.status(500).json({ message: e.message });
    }
};

exports.addTask = async (req, res, next) => {
    const data = req.body.task;
    try {
        const task = await Todo.create({ description: data });
        if (task) {
            const tasks = await Todo.findAll();
            return res.send(tasks);
        }
      //  return res.status(500).json({ message: e.message });
    } catch (e) {
        return res.status(500).json({ message: e.message });
    }
};

exports.deleteTask = async (req, res, next) => {

    const { id } = req.params;
    try {
        const result = await (await Todo.findByPk(id)).destroy();
        if(result){
            const tasks = await Todo.findAll();
            return res.send(tasks);
        }
        return res.send(404).json({ message: "Not Found" });
    } catch (e) {
        return res.status(500).json({ message: e.message });
    }
};

exports.updateTask = async (req, res, next) => {
    const { id } = req.params;
    const data = req.body.task;
    try{
        const upatedTask = await(await Todo.findByPk(id)).update({description: data});
        if(upatedTask){
            const tasks = await Todo.findAll();
            return res.send(tasks);
        }
        return res.send(404).json({ message: "Not Found" });
    }catch (e) {
        return res.status(500).json({ message: e.message });
    }
};