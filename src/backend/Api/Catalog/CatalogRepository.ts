import { CatalogItem, ICatalogData } from '../../App/Catalog/CatalogItem';
import { Catalog } from '../../App/Catalog/Catalog';
import { CatalogDb } from './CatalogDb';

export class CatalogRepository {

    GetCatalog() : Catalog {
        return CatalogDb.GetCatalog();
    }

    GetItems() : Array<CatalogItem> {
        return  CatalogDb.GetCatalog().Items;
    }

    GetItem(id: string) : CatalogItem | undefined {
        return  CatalogDb.GetCatalog().GetItem(id);
    }

    AddItem(id: string, data: ICatalogData) : string {
        return CatalogDb.GetCatalog().AddItem(id, data);
    }

    DeleteItem(id: string) : boolean {
        return CatalogDb.GetCatalog().DeleteItem(id);
    }
}