import { Injectable } from '@angular/core';
import { Headers,Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Task } from './task';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class TasksService {
private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) { }

// Get all posts from the API
  getAllTasks() {
    return this.http.get('http://localhost:8000/tasks')
      .map(res => res.json());
  }
 
CreateTask(task:Task){
var data :string = JSON.stringify(task);
return this.http.post('http://localhost:8000/tasks', data, {headers: this.headers})
      .toPromise()
    .then(res => res.json().data as Task);
  }
} 

