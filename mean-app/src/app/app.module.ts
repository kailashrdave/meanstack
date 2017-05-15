import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { TasksService } from './tasks.service';

import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskFormComponent } from './task-form/task-form.component';

const ROUTES = [
  {
    path: '',
    redirectTo: 'tasks',
    pathMatch: 'full'
  },
  {
    path: 'tasks',
    component: TasksComponent
  },
  {
    path: 'tasks/create',
    component: TaskFormComponent
  },
  {
    path: 'tasks/update/:taskId',
    component: TaskFormComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    TaskFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)

  ],
  providers: [TasksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
