import { Tuple3 } from "./Tuple3";

export class Point extends Tuple3 {

    constructor(x:number = 0, y:number = 0, z:number = 0) {
        super(x,y,z);
    }

    Offset(x:number = 0, y:number = 0, z:number = 0) {
        return new Point(this.X + x, this.Y + y, this.Z + z);
    }

    Add(t:Point) {
        return new Point(this.X + t.X, this.Y + t.Y, this.Z + t.Z);
    }

    Subtract(t:Point) {
        return new Point(this.X - t.X, this.Y - t.Y, this.Z - t.Z);
    }

    Scale(sf:number) {
        return new Point(this.X * sf, this.Y * sf, this.Z * sf);
    }


    Distance(pt: Point) {
        let dx = pt.X - this.X;
        let dy = pt.Y - this.Y;
        let dz = pt.Z - this.Z;

        return Math.sqrt(dx*dx + dy*dy + dz*dz);
    }
}