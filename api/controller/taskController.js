var mongoose = require('mongoose'),
  Task = mongoose.model('Tasks');

exports.list_tasks = function(req, res, next) {
  Task.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};




exports.create_task = function(req, res, next) {
  var new_task = new Task(req.body);
  new_task.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.get_task = function(req, res, next) {
  Task.findById(req.params.taskId, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.update_task = function(req, res, next) {
  Task.findOneAndUpdate(req.params.taskId, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.delete_task = function(req, res, next) {


  Task.remove({
    _id: req.params.taskId
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};


