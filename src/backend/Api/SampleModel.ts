import { Model } from '../App/Model/Model';
import { Coordinate } from '../App/Model/Coordinate';

export class SampleModel {

    static Create(modelName: string) : Model {

        let model = new Model(modelName);

        model.AddComponent("P-1", "Pipe", {len: {value: 1000, units: "MM"}, od: {value: 100, units: "MM"}}, new Coordinate(500,200,0,"MM"));
        model.AddComponent("GV-1", "GateValve", {len: {value: 250, units: "MM"}, od: {value: 200, units: "MM"}}, new Coordinate(1500, 200, 0,"MM"));
        model.AddComponent("P-2", "Pipe", {len: {value: 800, units: "MM"}, od: {value: 100, units: "MM"}}, new Coordinate(1750,200,0,"MM"));

        model.AddComponent("P-3", "Pipe", {len: {value: 50, units: "IN"}, od: {value: 6, units: "IN"}}, new Coordinate(5,50,0,"IN"));
        model.AddComponent("BV-1", "BallValve", {len: {value: 18, units: "IN"}, od: {value: 18, units: "IN"}, ballRadius: {value: 5, units: "IN"}}, new Coordinate(55, 50, 0,"IN"));
        model.AddComponent("P-4", "Pipe", {len: {value: 100, units: "IN"}, od: {value: 6, units: "IN"}}, new Coordinate(73,50,0,"IN"));

        model.AddComponent("P-5", "Pipe", {len: 1000, od: 150, extra: "Extra"}, new Coordinate(100,500,0));
        model.AddComponent("BV-2", "BallValve", {len: 250, od: 200, ballRadius: 100}, new Coordinate(1100, 500, 0));
        model.AddComponent("P-6", "Pipe",{len: 600, od: 150}, new Coordinate(1350,500,0));

        return model;
        
                
    }
}