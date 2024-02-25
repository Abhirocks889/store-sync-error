import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from '../tasks/tasks.component';
import { RouterModule } from '@angular/router';
import { CHECK_TASKS_STORE_NAME, checkTasksReducer, checkTasksStorageSync } from '../check-tasks-store';
import { StoreModule } from '@ngrx/store';
import { storageSyncReducer } from '../helpers/store-sync';


@NgModule({
  declarations: [
    TasksComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(
      CHECK_TASKS_STORE_NAME,
      checkTasksReducer,
      {
        metaReducers: [
          // This is used for syncing the store with the session storage lazily
          storageSyncReducer(CHECK_TASKS_STORE_NAME, checkTasksStorageSync)
        ]
      }
    ),
    RouterModule.forChild([
      {
        path: '',
        component: TasksComponent
      }
    ]),
  ]
})
export class TasksModule { }
