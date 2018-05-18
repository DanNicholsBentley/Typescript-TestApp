import { Guid } from 'guid-typescript';
import { Utilities } from './Utilities';
import {Point} from '../Geometry/Point';
import {IDrawMethodProps} from './IDrawMethodProps';
import { ModelComponent } from './ModelComponent';

export class Model {
    private id: number = Utilities.NextId();
    private guid: string = Guid.create().toString();
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

    get Guid() {
        return this.guid;
    }

    get Name() {
        return this.name;
    }

    get Components() {
        return this.components;
    }

    AddComponent(name: string, drawMethod: string, props: IDrawMethodProps, origin: Point) : void {
        this.components.push(new ModelComponent(name, drawMethod, props, origin));
    }

    AddModelComponent(comp: ModelComponent) :void {
        this.components.push(comp);
    }

    GetComponentById(id: number) : ModelComponent | undefined {
        return this.components.find(comp => comp.Id == id);
    }

    GetComponentByName(name: string) : ModelComponent | undefined {
        return this.components.find(comp => comp.Name === name);
    }

    Offset(x:number, y:number, z:number) : void {
        for(let comp of this.components) {
            comp.Offset(x,y,z);
        }
    }

}