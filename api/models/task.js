
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema = new Schema({
  name: {
    type: String,
    Required: 'Kindly enter the name of the task'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['ongoing']
  },
  CratedBy:{
    type: String,
    default: ['Admin']
  },
  End_Date:{
    type: Date,
    default: Date.now
  },
  Description:{
    type: String
  }
});

module.exports = mongoose.model('Tasks', TaskSchema);