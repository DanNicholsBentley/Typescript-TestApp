export class Coordinate {
    private x: number = 0;
    private y: number = 0;
    private z: number = 0;

    constructor(x:number = 0, y:number = 0, z:number = 0) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    Print(desc: string){
        return `${desc} ${JSON.stringify(this)}`;
    }

    get X() {
        return this.x;
    }

    get Y() {
        return this.y;
    }

    get Z() {
        return this.z;
    }

    set X(x: number) {
        this.x = x;
    }

    set Y(y: number) {
        this.y = y;
    }

    set Z(z: number) {
        this.z = z;
    }

    SetXYZ(x: number, y:number, z: number) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    Offset(x: number, y:number, z: number) : Coordinate {
        return new Coordinate(this.x + x, this.y + y, this.z + z);
    }

    OffsetInPlace(x: number, y:number, z: number) {
        this.x += x;
        this.y += y;
        this.z += z;
    }

    Scale(sf: number) : Coordinate {
        return new Coordinate(this.x * sf,this.y * sf, this.z * sf)
    }

    ScaleInPlace(sf: number) {
        this.x *= sf;
        this.y *= sf;
        this.z *= sf;
    }

    Add(coord: Coordinate) : Coordinate {
        return new Coordinate(this.x + coord.x, this.y + coord.y, this.z + coord.z);
    }

    AddInPlace(coord: Coordinate) {
        this.OffsetInPlace(coord.x, coord.y, coord.z);
    }

    Subtract(coord: Coordinate) : Coordinate {
        return new Coordinate(this.x - coord.x, this.y - coord.y, this.z - coord.z);
    }

    SubtractInPlace(coord: Coordinate) {
        this.OffsetInPlace(coord.x, coord.y, coord.z);
    }

    Distance(coord: Coordinate) {
        let dx = coord.X - this.X;
        let dy = coord.Y - this.Y;
        let dz = coord.Z - this.Z;

        return Math.sqrt(dx*dx + dy*dy + dz*dz);
    }

}