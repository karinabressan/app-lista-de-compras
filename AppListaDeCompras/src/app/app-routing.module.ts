import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'shopping-lists',
    loadChildren: () => import('./shopping-lists/shopping-lists.module').then(m => m.ShoppingListsPageModule),
    pathMatch: 'full'
  },
  {
    path: 'shopping-lists/:listId',
    loadChildren: () => import('./shopping-list-itens/shopping-list-itens.module').then(m => m.ShoppingListItensPageModule)
  },
  {
    path: '',
    redirectTo: '/shopping-lists',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
