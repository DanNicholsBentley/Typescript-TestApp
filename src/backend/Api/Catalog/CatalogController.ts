import { CatalogRepository } from './CatalogRepository';
import { Catalog } from '../../App/Catalog/Catalog';
import { CatalogItem, ICatalogData } from '../../App/Catalog/CatalogItem';

export class CatalogController {

    catalogRepository: CatalogRepository;

    constructor() {
        this.catalogRepository = new CatalogRepository();
    }

    GetCatalog() : Catalog {
        return this.catalogRepository.GetCatalog();
    }

    GetItems() : Array<CatalogItem> {
        return this.catalogRepository.GetItems();
    }

    GetItem(id: string) : CatalogItem | undefined {
        return this.catalogRepository.GetItem(id);
    }

    AddItem(id: string, data: ICatalogData) : string {
        return this.catalogRepository.AddItem(id, data);
    }

    DeleteItem(id: string) : boolean {
        return this.catalogRepository.DeleteItem(id);

    }
}