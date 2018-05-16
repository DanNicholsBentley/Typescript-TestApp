import {Guid} from 'guid-typescript';
import moment from 'moment';
import { Utilities } from './Utilities';
import {GraphicalElement} from '../Graphics/GraphicalElement';

export class ModelComponent {
    private id: number = Utilities.NextId();
    private guid: string = Guid.create().toString();
    private createdOn: string;
    private name: string;
    private graphics: Array<GraphicalElement> = new Array<GraphicalElement>();

    constructor(name: string) {
        this.name = name;
        this.createdOn = moment().format('MMMM Do YYYY, h:mm:ss a');
    }

    Clone(name?: string) {
        let modelName = name ? name : this.name;
        let comp = new ModelComponent(modelName);
        for(let elem of this.graphics) {
            comp.Graphics.push(elem.Clone());
        }

        return comp;
    }

    Print() {
        return `${this.name}: ${JSON.stringify(this)}`;
    }


    get Id() {
        return this.id;
    }

    get Guid() {
        return this.guid;
    }

    get CreatedOn () {
        return this.createdOn;
    }

    get Name() {
        return this.name;
    }

    get Graphics() {
        return this.graphics;
    }

    AddGraphicalElement(elem: GraphicalElement) {
        this.graphics.push(elem);
    }

    Offset(x: number, y: number, z:number) {
        for(let elem of this.graphics) {
            elem.Offset(x,y,z);
        }
    }

}