import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   // loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  //   loadChildren: () => import('./tab1/tab1-routing.module').then(m => m.Tab1PageRoutingModule)
  // },
  {
    path: '',
    loadChildren: () => import('./pages/books/books.module').then( m => m.BooksPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
