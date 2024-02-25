# StoreSyncError

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.11.

## Running the application

Run `yarn install` && `yarn start`.

Navigate to `http://localhost:4200/`.

## Details

The app consists of a lazily loaded feature route: Tasks.
The `TasksComponent` depends on the `Tasks` store which is an entity store.

The objective is to sync the state of this store lazily inside the feature module instead of doing it in the app module. This will ensure that the main bundle is not polluted with a feature store and its dependencies.

## Syncing in the app module
The code is present inside `app.module.ts` in line no: `28`. Uncomment to check the storage sync from app module which works perfectly.

## Syncing in the feature module Tasks
The code is present inside `tasks.module.ts` in line no: `22`. This does not work currently with the existing implementation of `o3r's` `syncStorage` method.

## Error
Upon navigating to the tasks route, there is a console error and the store is not initialized or synced with the storage.

## Root cause
The issue is the same as mentioned here: [1320](https://github.com/AmadeusITGroup/otter/pull/1320)
