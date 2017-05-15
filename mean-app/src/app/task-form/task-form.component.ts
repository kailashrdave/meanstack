import { Component, OnInit,Input  } from '@angular/core';
import { TasksService } from '../tasks.service';
import { Router, ActivatedRoute } from '@angular/router';


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

  @Input()
  taskId:string;
  isUpdate:boolean=false;
  constructor(private tasksService: TasksService,private router: ActivatedRoute) { }

  ngOnInit() {
   this.router
        .params
        .subscribe(params => {
            
            this.taskId = params['taskId']; // --> Name must match wanted paramter
    });
    
    if(this.taskId != "" && this.taskId != undefined)
    {
      this.LoadTask(this.taskId);
    }
  }
  
  Save (){
	
  if(!this.isUpdate)
	   this.tasksService.CreateTask(this.task);
  else
      this.tasksService.UpdateTask(this.task);

	console.log(this.task.name);
  }

  LoadTask(id:string)
  {
    this.tasksService.GetTask(id).then(function(response) {
    
           var data = response;
           this.task = data;
           //returning data to resolving promise
           return data;
        }, function(error) {
            return 'There was an error getting data';
        });

  }

}
