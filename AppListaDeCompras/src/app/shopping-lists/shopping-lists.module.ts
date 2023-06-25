import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShoppingListsPage } from './shopping-lists.page';

import { ShoppingListsRoutingModule } from './shopping-lists-routing.module';
import { ShoppingListsService } from './shopping-lists.service';
import { StorageService } from '../services/storage.service';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ShoppingListsRoutingModule
  ],
  declarations: [ShoppingListsPage],
  providers: [StorageService, ShoppingListsService]
})
export class ShoppingListsPageModule {}
