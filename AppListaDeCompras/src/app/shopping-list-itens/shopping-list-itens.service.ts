import { Injectable } from "@angular/core";
import { ShoppingList } from "../model/shopping-list";
import { ShoppingListsService } from "../shopping-lists/shopping-lists.service";

@Injectable()
export class ShoppingListItensService {
    constructor(private shoppingListsService: ShoppingListsService) {}

    getShoppingList(id: number): ShoppingList | undefined{
        return this.shoppingListsService.getAll().find(s => s.id === id);
        
    }

    

}