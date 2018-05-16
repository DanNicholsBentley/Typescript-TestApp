import express from 'express';
import {ModelRoutes} from './ModelRoutes';

export class Api {

    static Start() {
        let api = express();
        let modelRoutes = new ModelRoutes();

        api.get('/',  (request, response) => {
            response.send('Application API');
        });

        // Add routes
        api.use('/api/model', modelRoutes.GetRoutes());

        // ---------------------------------------------
        // Run the server...
        // ---------------------------------------------
        api.set("port", process.env.PORT || 3000);
        // tslint:disable-next-line:no-console
        api.listen(api.get("port"), () => console.log("Open browser and navigate to http://localhost:" + api.get("port")));

    }
    
}
