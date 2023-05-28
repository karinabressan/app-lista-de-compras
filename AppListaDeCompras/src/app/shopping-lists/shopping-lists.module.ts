import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ShoppingListsPage } from './shopping-lists.page';

import { ShoppingListsRoutingModule } from './shopping-lists-routing.module';
import { ShoppingListsService } from './shopping-lists.service';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ShoppingListsRoutingModule
  ],
  declarations: [ShoppingListsPage],
  providers: [ShoppingListsService]
})
export class ShoppingListsPageModule {}
