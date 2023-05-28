import { Injectable } from "@angular/core";
import { ShoppingList } from "../model/shopping-list";

@Injectable()
export class ShoppingListsService {


    getShoppingLists(): ShoppingList[] {
        return [
            {
                id: 1,
                title: 'compra 1',
                itens: [
                    { id: 1, description: 'doce de leite' }
                ]
            },
        ];
    }
}