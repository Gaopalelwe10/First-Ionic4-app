import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TabsPage } from './page/tabs/tabs.page';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'detail', loadChildren: './page/detail/detail.module#DetailPageModule' },
  { path: 'tabs', component: TabsPage , children:[
    // {path: '', loadChildren: './page/detail/detail.module#DetailPageModule' },
    { path: 'detail', loadChildren: './page/detail/detail.module#DetailPageModule' },
    { path: 'notification' , loadChildren: './page/notifications/notifications.module#NotificationsPageModule'},
    { path: 'profile', loadChildren: './page/profile/profile.module#ProfilePageModule' },

  ]  
},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
