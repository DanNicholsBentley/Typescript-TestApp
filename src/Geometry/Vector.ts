import {Constants} from './Constants';
import {Tuple3} from './Tuple3';

export class Vector extends Tuple3 {

    constructor(x:number = 0, y:number = 0, z:number = 0) {
        super(x,y,z);
    }
    
    Magnitude() {
        return Math.sqrt(this.X*this.X + this.Y*this.Y + this.Z*this.Z);
    }

    Normalize() {
        let mag = this.Magnitude();
        if(mag < Constants.Tolerance) {
            return new Vector(0,0,0);
        }
        else {
            return new Vector(this.X/mag, this.Y/mag, this.Z/mag);
        }
    }
}