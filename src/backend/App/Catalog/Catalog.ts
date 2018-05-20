import { Guid } from 'guid-typescript';
import { CatalogItem, ICatalogData } from './CatalogItem';
import { Utilities } from './Utilities';

export class Catalog {
    private id: number = Utilities.NextId();
    private guid: string = Guid.create().toString();
    private name: string;
    private createdOn: string;
    private modifiedOn: string;
    private items: Array<CatalogItem> = new Array<CatalogItem>();


    constructor(name: string) {
        this.name = name;
        this.createdOn = Utilities.Now();
        this.modifiedOn = this.createdOn;
    }

    get Id() {
        return this.id;
    }

    get Guid() {
        return this.guid;
    }

    get Name() {
        return this.name;
    }

    get CreatedOn () {
        return this.createdOn;
    }

    get ModifedOn () {
        return this.modifiedOn;
    }


    get Items() {
        return this.items;
    }

    AddItem(id: string, data: ICatalogData) : string {

        let item = new CatalogItem(id, data);
        this.AddCatalogItem(item);
        return item.Id;
    }

    AddCatalogItem(item: CatalogItem) : void {
        this.items.push(item);
        this.modifiedOn = Utilities.Now();
    }

    GetItem(id: string) : CatalogItem | undefined {
        return this.items.find(item => item.Id == id);
    }

    DeleteItem(id: string) : boolean {
        let index: number = this.items.findIndex(item => item.Id == id);
        if(index >= 0) {
            this.items.splice(index, 1);
            this.modifiedOn = Utilities.Now();
            return true;
        }
        return false;
        
    }

}