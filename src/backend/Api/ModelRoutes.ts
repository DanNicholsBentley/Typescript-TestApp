import {Response, Request, Router} from 'express';
import {ModelController} from './ModelController';

export class ModelRoutes {

    router: Router;
    modelController: ModelController;

    constructor() {
        this.router = Router();
        this.modelController = new ModelController();

    }

    GetRoutes() : Router {

        this.router.get('/', (request : Request, response: Response) => {
            response.json(this.modelController.getModel());
        });

        this.router.get('/components', (request : Request, response: Response) => {
            response.json(this.modelController.getComponents());
        });

        this.router.get('/components/:idOrName', (request : Request, response: Response) => {
            let param = request.params.idOrName;
            if(isNaN(param)) {
                response.json(this.modelController.getComponentByName(param));
            }
            else {
                console.log("getComponentById");
                response.json(this.modelController.getComponentById(param));
            }
            
        });

        return this.router;

   }
    
}
