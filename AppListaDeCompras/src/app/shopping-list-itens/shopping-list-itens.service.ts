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



    async update(listId:number, itens: ShopItem[]):Promise<void>{
        const shoppingLists = await this.shoppingListsService.getAll();
        const shoppingList = shoppingLists.find(this.shoppingListsService.findById(listId));
        if(shoppingList){
            shoppingList.itens = itens;
        }
        await this.shoppingListsService.update(shoppingLists);
    }

    async delete(itemId: number, listId: number){
        const shoppingLists = await this.shoppingListsService.getAll();
        const shoppingList = shoppingLists.find(this.shoppingListsService.findById(listId));
        if(shoppingList){
            const index = shoppingList.itens.findIndex(item => item.id ===  itemId);
            shoppingList.itens.splice(index,1);
            await this.shoppingListsService.update(shoppingLists);
        }
    }

    async add(description: string, listId: number){
        const shoppingLists = await this.shoppingListsService.getAll();
        const shoppingList = shoppingLists.find(this.shoppingListsService.findById(listId));
        let id = 1;
        if(shoppingList){
            id = shoppingList.itens.length ? shoppingList.itens[shoppingList.itens.length-1].id : 0;
            id++;
        }
        shoppingList?.itens.push(new ShopItem(description,id, false))
        await this.shoppingListsService.update(shoppingLists);
    }

    


}