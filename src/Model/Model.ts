import { Guid } from 'guid-typescript';
import { ModelComponent } from './ModelComponent';

export class Model {
    private id: string = Guid.create().toString();
    private name: string;
    private components: Array<ModelComponent> = new Array<ModelComponent>();

    constructor(name: string) {
        this.name = name;
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

}