import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { Action, ActionReducer, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { checkTasksStorageSync } from './check-tasks-store';
import {syncStorage} from '@o3r/store-sync';

export function storageSyncWrapper<T, V extends Action = Action>(reducer: ActionReducer<T, V>): ActionReducer<T, V> {
  const storageStates: any = [
    {checkTasks: checkTasksStorageSync}
  ];
  return syncStorage({keys: storageStates, rehydrate: true, storage: sessionStorage || localStorage})(reducer);
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {
      // This is used to syncing with the session storage eagerly
      // metaReducers: [storageSyncWrapper]
    }),
    StoreDevtoolsModule.instrument({ maxAge: 1000 })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
