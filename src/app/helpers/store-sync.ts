import { ActionReducer } from "@ngrx/store";
import { syncStorage } from "@o3r/store-sync";

/**
 * Meta reducer to sync the store with the storage
 *
 * @param key the key that identifies the feature
 * @param storageSync the custom storage sync method to use to rehydrate the state
 * @param storage the storage to use
 * @param syncForFeature boolean to indicate if the store is a feature store
 */
export function storageSyncReducer<T>(key: string, storageSync: T, storage: Storage = sessionStorage, syncForFeature = true) {
  return (reducer: ActionReducer<any>): ActionReducer<any> => {
    return syncStorage({
      keys: [{
        [key]: {...storageSync, syncForFeature}
      }],
      rehydrate: true,
      storage
    })(reducer);
  };
}
