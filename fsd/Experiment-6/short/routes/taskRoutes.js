const r=require('express').Router(),c=require('../controllers/taskController');r.get('/',c.getAllTasks).post('/',c.createTask).put('/:id',c.editTask).delete('/:id',c.deleteTask);module.exports=r;
