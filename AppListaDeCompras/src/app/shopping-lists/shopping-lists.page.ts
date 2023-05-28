import { Component, OnInit } from '@angular/core';
import { ShoppingListsService } from './shopping-lists.service';
import { ShoppingList } from '../model/shopping-list';

@Component({
  selector: 'app-shopping-lists',
  templateUrl: 'shopping-lists.page.html',
  styleUrls: ['shopping-lists.page.scss']
})
export class ShoppingListsPage implements OnInit{
  shoppingLists: ShoppingList[] = [];
  private shoppingListsService: ShoppingListsService;

  constructor(shoppingListsService: ShoppingListsService) {
    this.shoppingListsService = shoppingListsService;
  }
  
  ngOnInit(): void {

    this.shoppingLists = this.shoppingListsService.getShoppingLists();
  }

}
