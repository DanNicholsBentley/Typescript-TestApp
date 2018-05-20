import { Catalog } from '../../App/Catalog/Catalog';
import { SampleCatalog } from './SampleCatalog';

export class CatalogDb {
    private static catalog: Catalog = new Catalog("Empty");

    public static CreateCatalog() : void {
        this.catalog = SampleCatalog.Create("Test Catalog");
    }

    public static GetCatalog() : Catalog {
        return this.catalog;
    }

}