import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingListItensPage } from './shopping-list-itens.page';

const routes: Routes = [
  {
    path: '',
    component: ShoppingListItensPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoppingListItensRoutingModule {}
