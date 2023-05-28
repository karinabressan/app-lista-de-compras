import { ShopItem } from "./shop-item";

export class ShoppingList {
    id: number;
    title: string;
    itens: ShopItem[];

    constructor(id: number, title: string, itens: ShopItem[]) {
        this.id = id;
        this.title = title;
        this.itens = itens;
    }
}
