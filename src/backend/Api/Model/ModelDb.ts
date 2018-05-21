import { Model } from '../../App/Model/Model';

export class ModelDb {
    private static model: Model = new Model("Empty");

    public static SetModel(model: Model) : void {
        this.model = model;
    }

    public static GetModel() : Model {
        return this.model;
    }

}