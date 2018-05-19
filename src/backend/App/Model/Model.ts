import { Guid } from 'guid-typescript';
import moment from 'moment';
import { Utilities } from './Utilities';
import {Coordinate} from './Coordinate';
import {IDrawMethodProps} from './IDrawMethodProps';
import { ModelComponent } from './ModelComponent';

const Now = () =>  moment().format('MMMM Do YYYY, h:mm:ss a');

export class Model {
    private id: number = Utilities.NextId();
    private guid: string = Guid.create().toString();
    private name: string;
    private createdOn: string;
    private modifiedOn: string;
    private components: Array<ModelComponent> = new Array<ModelComponent>();


    constructor(name: string) {
        this.name = name;
        this.createdOn = Now();
        this.modifiedOn = this.createdOn;
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

    get CreatedOn () {
        return this.createdOn;
    }

    get ModifedOn () {
        return this.modifiedOn;
    }


    get Components() {
        return this.components;
    }

    AddComponent(name: string, drawMethod: string, props: IDrawMethodProps, origin: Coordinate) : number {

        let comp = new ModelComponent(name, drawMethod, props, origin);
        this.AddModelComponent(comp);
        return comp.Id;
    }

    AddModelComponent(comp: ModelComponent) : void {
        this.components.push(comp);
        this.modifiedOn = Now();
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

    DeleteComponent(id: number) : boolean {
        let index: number = this.components.findIndex(comp => comp.Id == id);
        if(index >= 0) {
            this.components.splice(index, 1);
            this.modifiedOn = Now();
            return true;
        }
        return false;
        
    }

}