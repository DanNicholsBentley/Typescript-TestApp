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

    Copy(circle: Circle) : Circle {
        return new Circle(circle.origin, circle.radius, circle.normal);
    }
    
    get Origin() : Point {
        return this.origin;
    }

    set Origin(pt: Point) {
        this.origin = pt;
    }

    get Radius() : number {
        return this.radius;
    }

    set Radius(radius: number) {
        this.radius = radius;
    }

    get Normal() : Vector {
        return this.normal;
    }

    set Normal(normal: Vector) {
        this.normal = normal;
    }

    Circumference() : number {
        return 2 * Math.PI * this.radius;
    }

    Area() : number {
        return Math.PI * this.radius * this.radius;
    }

    Offset(x: number, y: number, z: number) : void {
        this.origin = this.origin.Offset(x,y,z);
    }

}