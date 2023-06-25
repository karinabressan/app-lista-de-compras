import { Injectable } from "@angular/core";
import { ShoppingList } from "../model/shopping-list";
import { ShoppingListsService } from "../shopping-lists/shopping-lists.service";
import { StorageService } from "../services/storage.service";
import { ShopItem } from "../model/shop-item";

@Injectable()
export class ShoppingListItensService {
    constructor(private shoppingListsService: ShoppingListsService) {}

    async init(){
        await this.shoppingListsService.init();
    }

    async getShoppingList(id: number): Promise<ShoppingList | undefined>{
        const all = await this.shoppingListsService.getAll();
        return all.find(s => s.id === id);
    }



    async update(shoppingLists: ShoppingList[]):Promise<void>{
        await this.shoppingListsService.update(shoppingLists);
    }


    async add(description: string, listId: number){
        const shoppingLists = await this.shoppingListsService.getAll();
        const shoppingList = shoppingLists.find(this.shoppingListsService.findById(listId));
        let id = 1;
        if(shoppingList){
            id = shoppingList.itens.length ? shoppingList.itens[shoppingList.itens.length-1].id++ : 0;
        }
        shoppingList?.itens.push(new ShopItem(description,id))
        this.update(shoppingLists);
    }

    


}