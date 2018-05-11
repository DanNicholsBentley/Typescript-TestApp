import {Point} from '../Geometry/Point';
import {GraphicalElement, GraphicalElementType} from './GraphicalElement';

export class Line extends GraphicalElement {

    private start: Point;
    private end: Point;

    constructor(start: Point, end: Point) {
        super(GraphicalElementType.Line);
        this.start = start;
        this.end = end;
    }
    
    get Start() {
        return this.start;
    }

    set Start(pt: Point) {
        this.start = pt;
    }

    get End() {
        return this.end;
    }

    set End(pt: Point) {
        this.end = pt;
    }

    get MidPoint() {
        let x = (this.end.X + this.start.X) * 0.5;
        let y = (this.end.Y + this.start.Y) * 0.5;
        let z = (this.end.Z + this.start.Z) * 0.5;
        return new Point(x,y,z);
    }

    get Length() {
        return this.start.Distance(this.end);
    }
}