import {
  NgModule,
} from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';


const appRoutes: Routes = [
  {
    path: 'tasks',
    loadChildren: () => import('./tasks/tasks.module').then(m => m.TasksModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      scrollPositionRestoration: 'enabled',
      canceledNavigationResolution: 'computed'
    })
  ],
  providers: [],
  exports: [RouterModule]
})
export class AppRoutingModule {}
