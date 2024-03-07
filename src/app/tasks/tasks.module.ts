import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from '../tasks/tasks.component';
import { RouterModule } from '@angular/router';
import { CheckTasksStoreModule } from '../check-tasks-store';

@NgModule({
  declarations: [
    TasksComponent
  ],
  imports: [
    CommonModule,
    CheckTasksStoreModule,
    RouterModule.forChild([
      {
        path: '',
        component: TasksComponent
      }
    ]),
  ]
})
export class TasksModule { }
