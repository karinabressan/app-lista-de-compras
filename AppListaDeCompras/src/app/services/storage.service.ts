import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage-angular";
import * as cordovaSQLiteDriver from 'localforage-cordovasqlitedriver';


@Injectable()
export class StorageService<T> {

    private name: string;
    constructor(private storage: Storage){}

    async init(name: string): Promise<void>{
        await this.storage.defineDriver(cordovaSQLiteDriver);
        await this.storage.create();
        this.name = name;
    }

    async save(value:T): Promise<void>{
        await this.storage.set(this.name, JSON.stringify(value));
    }

    async get(): Promise<T>{
        const value = await this.storage.get(this.name)
        return value ? JSON.parse(value) : null;
    }

}