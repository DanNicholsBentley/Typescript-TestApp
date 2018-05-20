import {Response, Request, Router} from 'express';
import {CatalogController} from './CatalogController';

export class CatalogRoutes {

    router: Router;
    catalogController: CatalogController;

    constructor() {
        this.router = Router();
        this.catalogController = new CatalogController();

    }

    Routes() : Router {

        // Get Routes
        this.router.get('/', (request : Request, response: Response) => {
            response.json(this.catalogController.GetCatalog());
        });

        this.router.get('/items', (request : Request, response: Response) => {
            response.json(this.catalogController.GetItems());
        });

        this.router.get('/items/:id', (request : Request, response: Response) => {
            response.json(this.catalogController.GetItem(request.params.id));
        });

        // Post Routes

        this.router.post('/items', (request : Request, response: Response) => {
            console.log(request.body);
            let id = request.body.id;
            let data = request.body.data;  // {len: 200, od: 12};

            response.json(this.catalogController.AddItem(id, data));


        });

        // Delete Routes
        this.router.delete('/items/:id', (request : Request, response: Response) => {
            response.json(this.catalogController.DeleteItem(request.params.id));
            
        });

        return this.router;

   }
    
}
