import { Api } from './Api/Api';
import { ModelDb } from './Api/Model/ModelDb';
import { CatalogDb } from './Api/Catalog/CatalogDb';

// Create the in-memory Sample Model
ModelDb.CreateModel();

// Create the in-memory Catalog data
CatalogDb.CreateCatalog();

Api.Start();



