import {Point} from '../Geometry/Point';
import {Vector} from '../Geometry/Vector';
import {GraphicalElement, GraphicalElementType} from './GraphicalElement';

export class Circle extends GraphicalElement {

    private origin: Point = new Point();
    private normal: Vector = new Vector(0,0,1);
    private radius: number = 1;

    constructor(origin: Point, radius: number, normal?: Vector) {
        super(GraphicalElementType.Circle);
        this.origin = origin;
        this.radius = radius;

        if(normal) {
            this.normal = normal;
        }
    }

    Clone() : Circle {
        return new Circle(this.origin, this.radius, this.normal);
    }
    
    get Origin() {
        return this.origin;
    }

    set Origin(pt: Point) {
        this.origin = pt;
    }

    get Radius() {
        return this.radius;
    }

    set Radius(radius: number) {
        this.radius = radius;
    }

    get Normal() {
        return this.normal;
    }

    set Normal(normal: Vector) {
        this.normal = normal;
    }

    Circumference() {
        return 2 * Math.PI * this.radius;
    }

    Area() {
        return Math.PI * this.radius * this.radius;
    }

    Offset(x: number, y: number, z: number) {
        this.origin = this.origin.Offset(x,y,z);
    }

}