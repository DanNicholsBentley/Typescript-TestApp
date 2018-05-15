import express from 'express';
import {ModelController} from './ModelController';

export class Api {

    static Initialize() {
        let api = express();
        let modelController = new ModelController();

        // Add get routes
        api.get('/', function (request, response) {
            response.send('Application API');
        });

        api.get('/api/model', function (request, response) {
            response.json(modelController.getModel());
        });

        api.get('/api/model/components', function (request, response) {
            response.json(modelController.getComponents());
        });

        api.get('/api/model/components/:idOrName', function (request, response) {
            let param = request.params.idOrName;
            if(isNaN(param)) {
                response.json(modelController.getComponentByName(param));
            }
            else {
                console.log("getComponentById");
                response.json(modelController.getComponentById(param));
            }
            
        });

        api.listen(3000);

    }
    
}
