import {Response, Request, Router} from 'express';
import {ModelController} from './ModelController';
import { Point } from '../App/Geometry/Point';

export class ModelRoutes {

    router: Router;
    modelController: ModelController;

    constructor() {
        this.router = Router();
        this.modelController = new ModelController();

    }

    Routes() : Router {

        // Get Routes
        this.router.get('/', (request : Request, response: Response) => {
            response.json(this.modelController.GetModel());
        });

        this.router.get('/components', (request : Request, response: Response) => {
            response.json(this.modelController.GetComponents());
        });

        this.router.get('/components/:idOrName', (request : Request, response: Response) => {
            let param = request.params.idOrName;
            if(isNaN(param)) {
                response.json(this.modelController.GetComponentByName(param));
            }
            else {
                console.log("getComponentById");
                response.json(this.modelController.GetComponentById(param));
            }
            
        });

        // Post Routes

        this.router.post('/components', (request : Request, response: Response) => {
            console.log(request.body);
            let name = request.body.name;
            let drawMethod = request.body.drawMethod;
            //let props = request.body.props;
            let props = request.body.props;  // {len: 200, od: 12};
            let origin = new Point(request.body.origin.x, request.body.origin.y, request.body.origin.z);

            response.json(this.modelController.AddComponent(name, drawMethod, props, origin));


        });

        // Delete Routes
        this.router.delete('/components/:id', (request : Request, response: Response) => {
            response.json(this.modelController.DeleteComponent(request.params.id));
            
        });

        return this.router;

   }
    
}
