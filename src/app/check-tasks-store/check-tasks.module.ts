import { InjectionToken, ModuleWithProviders, NgModule } from '@angular/core';
import { Action, ActionReducer, StoreModule } from '@ngrx/store';

import { checkTasksReducer } from './check-tasks.reducer';
import { CHECK_TASKS_STORE_NAME, CheckTasksState } from './check-tasks.state';

/** Token of the CheckTasks reducer */
export const CHECK_TASKS_REDUCER_TOKEN = new InjectionToken<ActionReducer<CheckTasksState, Action>>('Feature CheckTasks Reducer');

/** Provide default reducer for CheckTasks store */
export function getDefaultCheckTasksReducer() {
  return checkTasksReducer;
}

@NgModule({
  imports: [
    StoreModule.forFeature(CHECK_TASKS_STORE_NAME, CHECK_TASKS_REDUCER_TOKEN),
  ],
  providers: [
    { provide: CHECK_TASKS_REDUCER_TOKEN, useFactory: getDefaultCheckTasksReducer }
  ]
})
export class CheckTasksStoreModule {
  public static forRoot<T extends CheckTasksState>(reducerFactory: () => ActionReducer<T, Action>): ModuleWithProviders<CheckTasksStoreModule> {
    return {
      ngModule: CheckTasksStoreModule,
      providers: [
        { provide: CHECK_TASKS_REDUCER_TOKEN, useFactory: reducerFactory }
      ]
    };
  }
}
