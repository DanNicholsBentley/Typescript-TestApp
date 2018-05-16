import moment from 'moment';
import { SampleModel } from './SampleModel';
import { ModelComponent } from '../App/Model/ModelComponent';
import { Model } from '../App/Model/Model';

export class ModelRepository {

    private model: Model = SampleModel.Create("Test Model " + moment().format('MMMM Do YYYY, h:mm:ss a'));

    GetModel() : Model {
        return this.model;
    }

    GetComponents() : Array<ModelComponent> {
        return this.model.Components;
    }

    GetComponentByName(name: string) : ModelComponent | undefined {
        return this.model.GetComponentByName(name);

    }

    GetComponentById(id: number) : ModelComponent | undefined {
        return this.model.GetComponentById(id);

    }
}