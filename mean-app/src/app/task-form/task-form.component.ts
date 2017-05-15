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
  id:0,
  name:"task name",
  Created_date :new Date(),
  status:"completed"
  };
  constructor(private tasksService: TasksService) { }

  ngOnInit() {
  }
  
  Save (){
	
  if(this.task.id > 0)
	   this.tasksService.CreateTask(this.task);
  else
      this.tasksService.UpdateTask(this.task);

	console.log(this.task.name);
  }

}
