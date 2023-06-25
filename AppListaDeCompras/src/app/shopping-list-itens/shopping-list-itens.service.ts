import { Injectable } from "@angular/core";
import { ShoppingList } from "../model/shopping-list";
import { ShoppingListsService } from "../shopping-lists/shopping-lists.service";

@Injectable()
export class ShoppingListItensService {
    constructor(private shoppingListsService: ShoppingListsService) {}

    async getShoppingList(id: number): Promise<ShoppingList | undefined>{
        const all = await this.shoppingListsService.getAll();
        return all.find(s => s.id === id);
        
    }

    

}