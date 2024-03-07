import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { checkTasksStorageSync } from './check-tasks-store';
import { StorageKeyConfiguration, StorageSync } from '@o3r/store-sync';

const localStorageStates: StorageKeyConfiguration[] = [
  {checkTasks: checkTasksStorageSync}
];
const storageSync = new StorageSync({
  keys: localStorageStates, rehydrate: true,
});
const metaReducers = [storageSync.localStorageSync()];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, { metaReducers }),
    StoreDevtoolsModule.instrument({ maxAge: 1000 })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
