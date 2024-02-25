import { Component } from '@angular/core';
import { CheckTasksState, Task, retrieveCheckTasksEntity, selectCheckTasksState } from '../check-tasks-store';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  public tasks$: Observable<CheckTasksState>;

  public mockTasks: Task[] = [
    {
      name: "Create a new user profile",
      status: "To Do",
    },
    {
      name: "Implement a search functionality",
      status: "In Progress",
    },
    {
      name: "Design a notification system",
      status: "To Do",
    },
    {
      name: "Add multi-language support",
      status: "Completed",
    },
    {
      name: "Enhance user authentication",
      status: "To Do",
    },
  ];

  constructor(private store: Store<CheckTasksState>) {
    this.tasks$ = this.store.pipe(select(selectCheckTasksState))
  }

  public addTasks() {
    this.store.dispatch(retrieveCheckTasksEntity({
      id: 'MOCK_ID',
      entity: {tasks: [...this.mockTasks]},
      requestId: 'MOCK_REQUEST_ID'
    }));
  }
}
