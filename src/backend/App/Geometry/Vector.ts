import {Constants} from './Constants';
import {Coordinate} from './Coordinate';

export class Vector extends Coordinate {

    constructor(x:number = 0, y:number = 0, z:number = 0) {
        super(x,y,z);
    }

    Clone() : Vector {
        return new Vector(this.X, this.Y, this.Z);
    }

    Copy(pt: Coordinate|Vector) : Vector {
        return new Vector(pt.X, pt.Y, pt.Z);
    }
    
    Magnitude() : number {
        return Math.sqrt(this.X*this.X + this.Y*this.Y + this.Z*this.Z);
    }

    Normalize() : Vector {
        let mag = this.Magnitude();
        if(mag < Constants.Tolerance) {
            return new Vector(0,0,0);
        }
        else {
            return new Vector(this.X/mag, this.Y/mag, this.Z/mag);
        }
    }
}