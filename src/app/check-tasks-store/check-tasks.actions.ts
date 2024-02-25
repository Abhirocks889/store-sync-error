import { createAction, props } from '@ngrx/store';
import { FailAsyncStoreItemEntitiesActionPayload, SetAsyncStoreItemEntityActionPayload } from '@o3r/core';

import { CheckTasks, CheckTasksId } from './check-tasks.state';

/** StateDetailsActions */
const ACTION_RESET = '[CheckTasks] reset';

/** Entity Actions */
const ACTION_FAIL_ENTITIES = '[CheckTasks] fail entities';

/** Async Actions */
export const ACTION_RETRIEVE_ENTITY = '[CheckTasks] retrieve entity';

/** Action to reset the whole state, by returning it to initial state. */
export const resetCheckTasks = createAction(ACTION_RESET);

/** Action to update failureStatus for every CheckTasks */
export const failCheckTasksEntities = createAction(ACTION_FAIL_ENTITIES, props<FailAsyncStoreItemEntitiesActionPayload<any>>());

/** Update a checkTasks entity if its ID is found, otherwise insert the new entity */
export const retrieveCheckTasksEntity = createAction(ACTION_RETRIEVE_ENTITY, props<SetAsyncStoreItemEntityActionPayload<CheckTasks> & CheckTasksId>());

