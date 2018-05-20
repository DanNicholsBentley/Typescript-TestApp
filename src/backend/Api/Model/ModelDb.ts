import { Model } from '../../App/Model/Model';
import { SampleModel } from './SampleModel';

export class ModelDb {
    private static model: Model = new Model("Empty");

    public static CreateModel() : void {
        this.model = SampleModel.Create("Test Model");
    }

    public static GetModel() : Model {
        return this.model;
    }

}