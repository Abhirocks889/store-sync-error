import {createFeatureSelector, createSelector} from '@ngrx/store';
import {checkTasksAdapter} from './check-tasks.reducer';
import {CHECK_TASKS_STORE_NAME, CheckTasksState} from './check-tasks.state';

const {selectIds, selectEntities, selectAll, selectTotal} = checkTasksAdapter.getSelectors();

/** Select CheckTasks State */
export const selectCheckTasksState = createFeatureSelector<CheckTasksState>(CHECK_TASKS_STORE_NAME);

/** Select the array of CheckTasks ids */
export const selectCheckTasksIds = createSelector(selectCheckTasksState, selectIds);

/** Select the array of CheckTasks */
export const selectAllCheckTasks = createSelector(selectCheckTasksState, selectAll);

/** Select the dictionary of CheckTasks entities */
export const selectCheckTasksEntities = createSelector(selectCheckTasksState, selectEntities);

/** Select the total CheckTasks count */
export const selectCheckTasksTotal = createSelector(selectCheckTasksState, selectTotal);

/** Select the store pending status */
export const selectCheckTasksStorePendingStatus = createSelector(selectCheckTasksState, (state) => state.isPending || false);
