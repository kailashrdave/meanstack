import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';

import { Task } from '../task';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  task:Task = {
  name:"task name",
  Created_date :new Date(),
  status:"completed"
  };
  constructor(private tasksService: TasksService) { }

  ngOnInit() {
  }
  
  Create (){
	
	this.tasksService.CreateTask(this.task);
	console.log(this.task.name);
  }

}
