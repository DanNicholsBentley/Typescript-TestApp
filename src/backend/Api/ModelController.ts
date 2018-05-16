import { ModelRepository } from './ModelRepository';
import { Model } from '../App/Model/Model';
import { ModelComponent } from '../App/Model/ModelComponent';

export class ModelController {

    modelRepository: ModelRepository;

    constructor() {
        this.modelRepository = new ModelRepository();
    }

    getModel() : Model {
        return this.modelRepository.GetModel();
    }

    getComponents() : Array<ModelComponent> {
        return this.modelRepository.GetComponents();
    }

    getComponentByName(name: string) : ModelComponent | undefined {
        return this.modelRepository.GetComponentByName(name);

    }

    getComponentById(id: number) : ModelComponent | undefined {
        return this.modelRepository.GetComponentById(id);

    }
}