import {Guid} from 'guid-typescript';
import {GraphicalElement} from '../Graphics/GraphicalElement';

export class ModelComponent {
    private id: string = Guid.create().toString();
    private name: string;
    private graphics: Array<GraphicalElement> = new Array<GraphicalElement>();

    constructor(name: string) {
        this.name = name;
    }

    Print() {
        return `${this.name}: ${JSON.stringify(this)}`;
    }


    get Id() {
        return this.id;
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

}