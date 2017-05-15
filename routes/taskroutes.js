'use strict';
module.exports = function(app) {
  var todoList = require('../api/controller/taskController');


  // todoList Routes
  app.route('/tasks')
    .get(todoList.list_tasks)
    .post(todoList.create_task);


  app.route('/tasks/:taskId')
    .get(todoList.get_task)
    .put(todoList.update_task)
    .delete(todoList.delete_task);
};
