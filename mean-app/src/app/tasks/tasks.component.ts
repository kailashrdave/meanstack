import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';
import { RouterModule, Routes,Router } from '@angular/router';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
	  tasks: any = [];


  constructor(private router: Router, private tasksService: TasksService) { }

  ngOnInit() {
    this.LoadTasks();
  }

  UpdateTask(id:string){

      this.router.navigate(['/tasks/update', id]);

  }

  LoadTasks(){
  this.tasksService.getAllTasks().subscribe(tasks => {
      this.tasks = tasks;
      console.log(tasks);
    });
  }

  DeleteTask(id:string){

      this.tasksService.DeleteTask(id);
      this.LoadTasks();

  }

}
