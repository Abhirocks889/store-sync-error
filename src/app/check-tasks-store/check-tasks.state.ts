import { EntityState } from '@ngrx/entity';
import { AsyncStoreItem } from '@o3r/core';

export interface Task {
  /** Name of the task */
  name: string;
  /** Status of the task */
  status: string;
}

/** Object containing the ID of cart/order */
export interface CheckTasksId {
  /** ID of the cart/order to interact with */
  id: string;
}

/** Tasks to perform by the api user */
export interface CheckTasks {
  /** List of tasks to check */
  tasks: Task[];
}

/**
 * CheckTasks model
 */
export interface CheckTasksModel extends AsyncStoreItem, CheckTasksId, CheckTasks {}

/**
 * CheckTasks state details
 */
export interface CheckTasksStateDetails extends AsyncStoreItem {}

/**
 * CheckTasks store state
 */
export interface CheckTasksState extends EntityState<CheckTasksModel>, CheckTasksStateDetails {}

/**
 * Name of the CheckTasks Store
 */
export const CHECK_TASKS_STORE_NAME = 'checkTasks';

/**
 * CheckTasks Store Interface
 */
export interface CheckTasksStore {
  /** CheckTasks state */
  [CHECK_TASKS_STORE_NAME]: CheckTasksState;
}
