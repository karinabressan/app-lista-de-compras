import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShoppingListItensPage } from './shopping-list-itens.page';

import { ShoppingListItensRoutingModule } from './shopping-list-itens-routing.module';
import { ShoppingListItensService } from './shopping-list-itens.service';
import { ShoppingListsService } from '../shopping-lists/shopping-lists.service';
import { StorageService } from '../services/storage.service';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ShoppingListItensRoutingModule
  ],
  declarations: [ShoppingListItensPage],
  providers: [StorageService,ShoppingListItensService, ShoppingListsService]
})
export class ShoppingListItensPageModule {}
