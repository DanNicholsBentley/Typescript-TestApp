import { Api } from './Api/Api';
import {CatalogDb} from './Api/Catalog/CatalogDb';
import {ModelDb} from './Api/Model/ModelDb';

import { SampleModel } from './SampleModel';
import { SampleCatalog } from './SampleCatalog';

// Create the in-memory Catalog data
CatalogDb.SetCatalog(SampleCatalog.Create("Test Catalog"));

// Create the in-memory Sample Model
ModelDb.SetModel(SampleModel.Create("Test Model"));


Api.Start();



