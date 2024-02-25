import { CheckTasksModel } from './check-tasks.state';

import { asyncEntitySerializer, Serializer } from '@o3r/core';
import { checkTasksAdapter, checkTasksInitialState } from './check-tasks.reducer';
import { CheckTasksState } from './check-tasks.state';

export const checkTasksStorageSerializer = asyncEntitySerializer;

export const checkTasksStorageDeserializer = (rawObject: any) => {
  if (!rawObject || !rawObject.ids) {
    return checkTasksInitialState;
  }
  const storeObject = checkTasksAdapter.getInitialState(rawObject);
  for (const id of rawObject.ids) {
    storeObject.entities[id] = rawObject.entities[id] as CheckTasksModel;

  }
  return storeObject;
};

export const checkTasksStorageSync: Serializer<CheckTasksState> = {
  serialize: checkTasksStorageSerializer,
  deserialize: checkTasksStorageDeserializer
};
