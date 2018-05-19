import * as _ from 'lodash';
import {Guid} from 'guid-typescript';
import moment from 'moment';
import { Utilities } from './Utilities';
import {Coordinate} from './Coordinate';
import {GraphicalElement} from '../Graphics/GraphicalElement';
import {ExecuteDrawMethod} from './DrawMethods';
import {IDrawMethodProps} from './IDrawMethodProps';
import * as ModelUnits from './ModelUnits';

export class ModelComponent {
    private id: number = Utilities.NextId();
    private guid: string = Guid.create().toString();
    private createdOn: string;
    private name: string;
    private drawMethod: string;
    private props: IDrawMethodProps;
    private origin: Coordinate;
    private graphics: Array<GraphicalElement> = new Array<GraphicalElement>();

    // constructor(name: string) {
    //     this.name = name;
    //     this.createdOn = moment().format('MMMM Do YYYY, h:mm:ss a');
    // }

    constructor(name: string, drawMethod: string, props: IDrawMethodProps, origin: Coordinate) {
        this.name = name;
        this.drawMethod = drawMethod;
        this.props = ModelUnits.PropsToModelUnits(_.cloneDeep(props));
        this.origin = origin;
        this.Graphics = ExecuteDrawMethod(drawMethod, this.props);
        this.Offset(this.origin.X, this.origin.Y, this.origin.Z);
        this.createdOn = moment().format('MMMM Do YYYY, h:mm:ss a');
    }


    Clone(name?: string) {
        let modelName = name ? name : this.name;
        let comp = new ModelComponent(modelName, this.drawMethod, this.props, this.origin);
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

    set Graphics(graphics: Array<GraphicalElement>) {
        this.graphics =  graphics;
    }

    AddGraphicalElement(elem: GraphicalElement) {
        this.graphics.push(elem);
    }

    Offset(x: number, y: number, z:number, coordUnits: ModelUnits.UnitLength = ModelUnits.ModelUnitsLength) {
        let mx = ModelUnits.LengthToModelUnits(x, coordUnits);
        let my = ModelUnits.LengthToModelUnits(y, coordUnits);
        let mz = ModelUnits.LengthToModelUnits(z, coordUnits);

        for(let elem of this.graphics) {
            elem.Offset(mx, my, mz);
        }
    }

}

