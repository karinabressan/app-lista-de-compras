import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ShoppingListsPage } from './shopping-lists.page';

import { ShoppingListsRoutingModule } from './shopping-lists-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ShoppingListsRoutingModule
  ],
  declarations: [ShoppingListsPage]
})
export class ShoppingListsPageModule {}
