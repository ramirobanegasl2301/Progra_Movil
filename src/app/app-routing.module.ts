import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'exercise1',
    loadChildren: () => import('./exercise1/exercise1.module').then( m => m.Exercise1PageModule)
  },
  {
    path: 'exercise5',
    loadChildren: () => import('./exercise5/exercise5.module').then( m => m.Exercise5PageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
