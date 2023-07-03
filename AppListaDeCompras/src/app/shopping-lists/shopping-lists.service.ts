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
                { id: 1, description: 'doce de leite', done: false },

            ]
        },            
        {
            id: 2,
            title: 'compra 2',
            itens: [
                { id: 2, description: 'açúcar', done: false },
                { id: 3, description: 'azeite', done: false },
            ]
        },
        {
            id: 3,
            title: 'itens para viagem',
            itens: [
                { id: 4, description: 'desodorante', done: false },
                { id: 5, description: 'mala', done: false },
                { id: 6, description: 'protetor solar', done: false },
                { id: 7, description: 'power bank', done: false },
                { id: 8, description: 'toalha', done: false },
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
        let shoppingLists = await this.getAll();
        if(!shoppingLists){
            shoppingLists = [];
        }
        let id = 1;
        if(shoppingLists){
            id = shoppingLists.length ? shoppingLists[shoppingLists.length-1].id : 0;
            id++;
        }
        const shoppingList: ShoppingList = new ShoppingList(id, title, []);
        shoppingLists.push(shoppingList);
        this.storageService.save(shoppingLists);
    }

}