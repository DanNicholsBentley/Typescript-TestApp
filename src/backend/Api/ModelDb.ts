import moment from 'moment';
import { Model } from '../App/Model/Model';
import { SampleModel } from './SampleModel';

export class ModelDb {
    private static model: Model = new Model("Empty");

    public static CreateModel() : void {
        this.model = SampleModel.Create("Test Model " + moment().format('MMMM Do YYYY, h:mm:ss a'));
    }

    public static GetModel() : Model {
        return this.model;
    }

}