
import { SampleModel } from './SampleModel';
import { ModelComponent } from '../App/Model/ModelComponent';
import { Model } from '../App/Model/Model';

export class ModelController {

    private model: Model = SampleModel.Create("Test Model 2");

    getModel() : Model {
        return this.model;
    }

    getComponents() : Array<ModelComponent> {
        return this.model.Components;
    }

    getComponentByName(name: string) : ModelComponent | undefined {
        return this.model.GetComponentByName(name);

    }

    getComponentById(id: number) : ModelComponent | undefined {
        return this.model.GetComponentById(id);

    }
}