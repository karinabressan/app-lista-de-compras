import { Component, OnInit } from '@angular/core';
import { ObjectUnsubscribedError } from 'rxjs';
import { ShoppingList } from '../model/shopping-list';
import { ShoppingListItensService } from './shopping-list-itens.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shopping-list-itens',
  templateUrl: 'shopping-list-itens.page.html',
  styleUrls: ['shopping-list-itens.page.scss']
})
export class ShoppingListItensPage implements OnInit {

  editMode:boolean = false;
  shoppingListItem: ShoppingList | undefined = undefined;
  private listId:number;
  private shoppingListItemService: ShoppingListItensService;
  
  constructor(shoppingListItemService: ShoppingListItensService, private activatedRoute: ActivatedRoute) {
    this.shoppingListItemService = shoppingListItemService;
    this.listId = +this.activatedRoute.snapshot.params['listId'];
  }

  async ngOnInit(): Promise<void> {
    await this.shoppingListItemService.init();
    this.shoppingListItem = await this.shoppingListItemService.getShoppingList(this.listId);
  }

  delete(index: number){

  }
  add(){

  }
  edit(){
    this.editMode = true;
  }
  confirmEdit(){
    this.editMode = false;
  }

}



