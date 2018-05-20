import { ModelComponent } from '../../App/Model/ModelComponent';
import { Model } from '../../App/Model/Model';
import { ModelDb } from './ModelDb';
import { IDrawMethodProps } from '../../App/Model/IDrawMethodProps';
import { Point } from '../../App/Geometry/Point';

export class ModelRepository {

    GetModel() : Model {
        return ModelDb.GetModel();
    }

    GetComponents() : Array<ModelComponent> {
        return  ModelDb.GetModel().Components;
    }

    GetComponentByName(name: string) : ModelComponent | undefined {
        return  ModelDb.GetModel().GetComponentByName(name);
    }

    GetComponentById(id: number) : ModelComponent | undefined {
        return  ModelDb.GetModel().GetComponentById(id);
    }

    AddComponent(name: string, drawMethod: string, props: IDrawMethodProps, origin: Point) : number {
        return ModelDb.GetModel().AddComponent(name, drawMethod, props, origin);
    }


    DeleteComponent(id: number) : boolean {
        return ModelDb.GetModel().DeleteComponent(id);
    }
}