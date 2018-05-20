import { Catalog } from '../../App/Catalog/Catalog';

export class SampleCatalog {

    static Create(catalogName: string) : Catalog {

        let catalog = new Catalog(catalogName);
        
        catalog.AddItem("XYZ-BV-1", 
                        {
                            manufacturer: "XYZ", 
                            description: "Company XYZ - BV-1", 
                            props: {len: {value: 18, units: "IN"}, od: {value: 12, units: "IN"}, ballRadius: {value: 4, units: "IN"}}
                        });

        return catalog;
        
                
    }
}