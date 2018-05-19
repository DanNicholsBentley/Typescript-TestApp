import { ModelRepository } from './ModelRepository';
import { Model } from '../App/Model/Model';
import { ModelComponent } from '../App/Model/ModelComponent';
import { IDrawMethodProps } from '../App/Model/IDrawMethodProps';
import { Point } from '../App/Geometry/Point';

export class ModelController {

    modelRepository: ModelRepository;

    constructor() {
        this.modelRepository = new ModelRepository();
    }

    GetModel() : Model {
        return this.modelRepository.GetModel();
    }

    GetComponents() : Array<ModelComponent> {
        return this.modelRepository.GetComponents();
    }

    GetComponentByName(name: string) : ModelComponent | undefined {
        return this.modelRepository.GetComponentByName(name);
    }

    GetComponentById(id: number) : ModelComponent | undefined {
        return this.modelRepository.GetComponentById(id);
    }

    AddComponent(name: string, drawMethod: string, props: IDrawMethodProps, origin: Point) : number {
        return this.modelRepository.AddComponent(name, drawMethod, props, origin);
    }

    DeleteComponent(id: number) : boolean {
        return this.modelRepository.DeleteComponent(id);

    }
}