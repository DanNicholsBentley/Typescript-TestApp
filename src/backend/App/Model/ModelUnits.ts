import {Point} from '../Geometry/Point';

export enum UnitLength {
    MM = "MM",
    IN = "IN"
}

export const IsUnitLength = (value: UnitLength | string) : value is UnitLength => {
    if((typeof value == "string") && !(value in UnitLength))
        return false;

    return true;
}

enum UnitWeight {
    LB,
    KG
}

// enum UnitType {
//     Length,
//     Weight
// }

const IsPositiveNumber = (n: any) : boolean => {
    return ((typeof n == "number") && (n > 0));
}

const HasLengthUnit = (unit: string) : boolean => {
    return ((typeof unit == "string") && (unit in UnitLength));
}


export interface DimensionalProperty {value: number, units: UnitLength};
const IsDimensionalProp = (prop: any) : prop is DimensionalProperty => {
    return (
        IsPositiveNumber(prop.value) &&
        HasLengthUnit(prop.units)
    );
}


//interface UnitDefinition {type: UnitType; units: UnitLength | UnitWeight};

export const ModelUnitsLength =  UnitLength.MM;
export const ModelUnitsWeight =  UnitWeight.KG;

const ConversionFactorInToMM = 25.4;

const InchesToMM = (inches: number) : number => inches * ConversionFactorInToMM;
const MMToInches = (mm: number) : number => mm / ConversionFactorInToMM;

const ConvertLength = (num: number, from: UnitLength, to: UnitLength) : number => {
    if (from == UnitLength.IN && to == UnitLength.MM) {
        return InchesToMM(num);
    }

    if (from == UnitLength.MM && to == UnitLength.IN) {
        return MMToInches(num);
    }

    return num;
}

export const LengthToModelUnits = (num: number, from: UnitLength) : number => {
    return ConvertLength(num, from, ModelUnitsLength)
}

export const DimensionToModelUnits = (dim: DimensionalProperty) : number => {
    return ConvertLength(dim.value, dim.units, ModelUnitsLength)
}
export const PointToModelUnits = (pt: Point, from: UnitLength) : Point => {
    return new Point(LengthToModelUnits(pt.X, from), LengthToModelUnits(pt.Y, from), LengthToModelUnits(pt.Z, from));
}

export const PropsToModelUnits = (data: any) : any => {

    for(let key in data) {
        let propVal = data[key];
        if(IsDimensionalProp(propVal)) {
            data[key] = DimensionToModelUnits(propVal);
        }
    }

    return data;
}
