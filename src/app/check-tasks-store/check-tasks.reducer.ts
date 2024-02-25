import { createEntityAdapter } from '@ngrx/entity';
import { ActionCreator, createReducer, on, ReducerTypes } from '@ngrx/store';
import { createEntityAsyncRequestAdapter } from '@o3r/core';
import * as actions from './check-tasks.actions';
import { CheckTasksModel, CheckTasksState, CheckTasksStateDetails } from './check-tasks.state';

/**
 * CheckTasks Store adapter
 */
export const checkTasksAdapter = createEntityAsyncRequestAdapter(createEntityAdapter<CheckTasksModel>({
  selectId: (model) => model.id
}));

/**
 * CheckTasks Store initial value
 */
export const checkTasksInitialState: CheckTasksState = checkTasksAdapter.getInitialState<CheckTasksStateDetails>({
  requestIds: []
});

/**
 * List of basic actions for CheckTasks Store
 */
export const checkTasksReducerFeatures: ReducerTypes<CheckTasksState, ActionCreator[]>[] = [
  on(actions.resetCheckTasks, () => checkTasksInitialState),

  on(actions.failCheckTasksEntities, (state, payload) =>
    checkTasksAdapter.failRequestMany(state, payload && payload.ids, payload.requestId)
  ),

  on(actions.retrieveCheckTasksEntity, (state, payload) =>
    checkTasksAdapter.resolveRequestOne(state, {...payload.entity, id: payload.id}, payload.requestId)),
];

/**
 * CheckTasks Store reducer
 */
export const checkTasksReducer = createReducer(
  checkTasksInitialState,
  ...checkTasksReducerFeatures
);
