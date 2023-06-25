import { Component, OnInit } from '@angular/core';
import { ObjectUnsubscribedError } from 'rxjs';
import { ShoppingList } from '../model/shopping-list';
import { ShoppingListItensService } from './shopping-list-itens.service';

@Component({
  selector: 'app-shopping-list-itens',
  templateUrl: 'shopping-list-itens.page.html',
  styleUrls: ['shopping-list-itens.page.scss']
})
export class ShoppingListItensPage implements OnInit {

  shoppingListItem: ShoppingList | undefined = undefined;
  private shoppingListItemService: ShoppingListItensService;
  
  constructor(shoppingListItemService: ShoppingListItensService) {
    this.shoppingListItemService = shoppingListItemService;
  }

  async ngOnInit(): Promise<void> {
    this.shoppingListItem = await this.shoppingListItemService.getShoppingList(3);
  }

}



