import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ShoppingListItensPage } from './shopping-list-itens.page';

import { ShoppingListItensRoutingModule } from './shopping-list-itens-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ShoppingListItensRoutingModule
  ],
  declarations: [ShoppingListItensPage]
})
export class ShoppingListItensPageModule {}
