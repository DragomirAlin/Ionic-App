import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },  { path: 'welcome', loadChildren: './welcome/welcome.module#WelcomePageModule' },
  { path: 'administrator', loadChildren: './administrator/administrator.module#AdministratorPageModule' },
  { path: 'manager', loadChildren: './manager/manager.module#ManagerPageModule' }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
