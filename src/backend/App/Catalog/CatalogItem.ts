import {Guid} from 'guid-typescript';

export interface ICatalogData {
    [props: string]: any;
}
export class CatalogItem {
    private id: string;
    private guid: string = Guid.create().toString();
    private data: ICatalogData;

    constructor(id: string, data: ICatalogData) {
        this.id = id;
        this.data = data;
    }

    get Id() : string {
        return this.id;
    }

    get Guid() : string {
        return this.guid;
    }

    get Data() : ICatalogData {
        return this.data;
    }
}