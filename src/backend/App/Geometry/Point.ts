import { Coordinate } from "./Coordinate";

export class Point extends Coordinate {

    constructor(x:number = 0, y:number = 0, z:number = 0) {
        super(x,y,z);
    }

    Clone() : Point {
        return new Point(this.X, this.Y, this.Z);
    }

    Copy(pt: Coordinate|Point) : Point {
        return new Point(pt.X, pt.Y, pt.Z);
    }

    Offset(x:number = 0, y:number = 0, z:number = 0) : Point {
        return this.Copy(super.Offset(x,y,z));
    }

    Add(pt:Point) : Point {
        return this.Copy(super.Add(pt));
    }

    Subtract(pt:Point) : Point {
        return this.Copy(super.Subtract(pt));
    }

    Scale(sf:number) : Point {
        return this.Copy(super.Scale(sf));
    }

}