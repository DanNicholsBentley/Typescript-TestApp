import {Point} from '../Geometry/Point';
import * as ModelUnits from './ModelUnits';

export class Coordinate extends Point {

    constructor(x: number, y: number, z: number, units: ModelUnits.UnitLength | string = ModelUnits.ModelUnitsLength) {
        super(x, y, z);
        if(ModelUnits.IsUnitLength(units))
        {
            this.X = ModelUnits.LengthToModelUnits(this.X, units);
            this.Y = ModelUnits.LengthToModelUnits(this.Y, units);
            this.Z = ModelUnits.LengthToModelUnits(this.Z, units);
        }
    }
}