import { Point } from '../App/Geometry/Point'
import { Line } from '../App/Graphics/Line';
import { Circle } from '../App/Graphics/Circle';
import { ModelComponent } from '../App/Model/ModelComponent';
import { Model } from '../App/Model/Model';

export class SampleModel {

    static Create(modelName: string) : Model {
        let l1 = new Line(new Point(0,0,0), new Point(1,0,0));
        
        let c1 = new Circle(l1.MidPoint, l1.Length * 0.25);
        
        let comp1: ModelComponent = new ModelComponent("comp1");
        comp1.AddGraphicalElement(l1);
        comp1.AddGraphicalElement(c1);
        
        let l2 = new Line(new Point(0,1,0), new Point(1,1,0));
        
        
        let comp2: ModelComponent = new ModelComponent("comp2");
        comp2.AddGraphicalElement(l2);
        
        let model = new Model(modelName);
        model.AddModelComponent(comp1);
        model.AddModelComponent(comp2);

        return model;
        
                
    }
}