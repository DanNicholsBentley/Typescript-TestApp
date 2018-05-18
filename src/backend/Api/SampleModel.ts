import { Model } from '../App/Model/Model';
import { Point } from '../App/Geometry/Point';

export class SampleModel {

    static Create(modelName: string) : Model {

        let model = new Model(modelName);

        model.AddComponent("P-1", "Pipe", {len: 40, od: 4}, new Point(10,25,0));
        model.AddComponent("GV-1", "GateValve", {len: 50, od: 10}, new Point(50, 25, 0));
        model.AddComponent("P-2", "Pipe",{len: 60, od: 4}, new Point(100,25,0));

        model.AddComponent("P-3", "Pipe", {len: 60, od: 8}, new Point(40,50,0));
        model.AddComponent("BV-1", "BallValve", {len: 50, od: 10, ballRadius: 6}, new Point(100, 50, 0));
        model.AddComponent("P-4", "Pipe", {len: 120, od: 8}, new Point(150,50,0));

        model.AddComponent("P-5", "Pipe", {len: 40, od: 4}, new Point(10,80,0));
        model.AddComponent("BV-2", "BallValve", {len: 25, od: 10}, new Point(50, 80, 0));
        model.AddComponent("P-6", "Pipe",{len: 60, od: 4}, new Point(75,80,0));

        return model;
        
                
    }
}