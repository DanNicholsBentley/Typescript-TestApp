import { Catalog } from '../../App/Catalog/Catalog';

export class CatalogDb {
    private static catalog: Catalog = new Catalog("Empty");

    public static SetCatalog(catalog: Catalog) : void {
        this.catalog = catalog;
    }

    public static GetCatalog() : Catalog {
        return this.catalog;
    }

}