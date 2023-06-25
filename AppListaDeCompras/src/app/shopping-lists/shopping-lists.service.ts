import { Injectable } from "@angular/core";
import { ShoppingList } from "../model/shopping-list";

@Injectable()
export class ShoppingListsService {

    private shoppingLists: ShoppingList[] = [
        {
            id: 1,
            title: 'compra 1',
            itens: [
                { id: 1, description: 'doce de leite' },

            ]
        },            
        {
            id: 2,
            title: 'compra 2',
            itens: [
                { id: 2, description: 'açúcar' },
                { id: 3, description: 'azeite' },
            ]
        },
        {
            id: 3,
            title: 'itens para viagem',
            itens: [
                { id: 4, description: 'desodorante' },
                { id: 5, description: 'mala' },
                { id: 6, description: 'protetor solar' },
                { id: 7, description: 'power bank' },
                { id: 8, description: 'toalha' },
            ]
        }
    ];

    getShoppingLists(): ShoppingList[] {
        return this.shoppingLists;
    }

    updateShoppingLists(shoppingList: ShoppingList[]):void{
        this.shoppingLists = shoppingList;
        // TODO - persistir
    }
}