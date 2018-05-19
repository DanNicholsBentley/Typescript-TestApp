import express from 'express';
import bodyParser from 'body-parser';
import {ModelRoutes} from './ModelRoutes';

export class Api {

    static Start() {
        let api = express();


        api.use(bodyParser.json()); // support json encoded bodies
        api.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


        api.get('/',  (request, response) => {
            response.send('Application API');
        });

        // Add model routes
        let modelRoutes = new ModelRoutes();
        api.use('/api/model', modelRoutes.Routes());

        // ---------------------------------------------
        // Run the server...
        // ---------------------------------------------
        api.set("port", process.env.PORT || 3000);
        // tslint:disable-next-line:no-console
        api.listen(api.get("port"), () => console.log("Open browser and navigate to http://localhost:" + api.get("port")));

    }
    
}
