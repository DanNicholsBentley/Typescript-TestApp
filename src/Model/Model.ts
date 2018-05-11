import { Guid } from 'guid-typescript';
import { ModelComponent } from './ModelComponent';

export class Model {
    private id: string = Guid.create().toString();
    private name: string;
    private components: Array<ModelComponent> = new Array<ModelComponent>();

    constructor(name: string) {
        this.name = name;
    }

    Clone(name: string) {
        let model = new Model(name);
        for(let comp of this.components) {
            model.components.push(comp.Clone());
        }

        return model;
    }

    Print() {
        return `${this.name}: ${JSON.stringify(this, undefined, 2)}`;
    }

    get Id() {
        return this.id;
    }

    get Name() {
        return this.name;
    }

    get Components() {
        return this.components;
    }

    AddModelComponent(comp: ModelComponent) {
        this.components.push(comp);
    }

    GetComponentById(id: string) : ModelComponent | null {
        for(let comp of this.components) {
            if(comp.Id == id) {
                return comp;
            }
        }

        return null;
    }

    GetComponentByName(name: string) : ModelComponent | null {
        for(let comp of this.components) {
            if(comp.Name == name) {
                return comp;
            }
        }

        return null;
    }
}