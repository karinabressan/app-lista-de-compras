import { Injectable } from "@angular/core";
import { ShoppingList } from "../model/shopping-list";
import { StorageService } from "../services/storage.service";

@Injectable()
export class ShoppingListsService {

    private _shoppingLists: ShoppingList[] = [
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

    constructor(private storageService: StorageService<ShoppingList[]>){

    }

    findById = (listId: number) => (s:ShoppingList):boolean => {return s.id === listId};

    async init(){
        await this.storageService.init('shoppingLists');
    }

    getAll(): Promise<ShoppingList[]> {
        return this.storageService.get();
    }

    async update(shoppingLists: ShoppingList[]):Promise<void>{
        await this.storageService.save(shoppingLists);
    }


    async add(title: string){
        const shoppingLists = await this.getAll();
        let id = 1;
        if(shoppingLists){
            id = shoppingLists.length ? shoppingLists[shoppingLists.length-1].id++ : 1;
        }
        const shoppingList: ShoppingList = new ShoppingList(id, title, []);
        shoppingLists.push(shoppingList);
        this.storageService.save(shoppingLists);
    }

}