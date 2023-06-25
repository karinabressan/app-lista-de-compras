export class ShopItem  {
    description: string;
    done: boolean;
    id: number;

    constructor(description: string, id: number, done: boolean){
        this.description = description;
        this.id = id;
        this.done = done;
    }

}