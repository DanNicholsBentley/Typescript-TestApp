export class Tuple3 {
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

    Offset(x: number, y:number, z: number) : Tuple3 {
        return new Tuple3(this.x + x, this.y + y, this.z + z);
    }

    OffsetInPlace(x: number, y:number, z: number) {
        this.x += x;
        this.y += y;
        this.z += z;
    }

    Scale(sf: number) : Tuple3 {
        return new Tuple3(this.x * sf,this.y * sf, this.z * sf)
    }

    ScaleInPlace(sf: number) {
        this.x *= sf;
        this.y *= sf;
        this.z *= sf;
    }

    Add(t2: Tuple3) : Tuple3 {
        return new Tuple3(this.x + t2.x, this.y + t2.y, this.z + t2.z);
    }

    AddInPlace(tup: Tuple3) {
        this.OffsetInPlace(tup.x, tup.y, tup.z);
    }

    Subtract(tup: Tuple3) : Tuple3 {
        return new Tuple3(this.x - tup.x, this.y - tup.y, this.z - tup.z);
    }

    SubtractInPlace(tup: Tuple3) {
        this.OffsetInPlace(tup.x, tup.y, tup.z);
    }

    Distance(tup: Tuple3) {
        let dx = tup.X - this.X;
        let dy = tup.Y - this.Y;
        let dz = tup.Z - this.Z;

        return Math.sqrt(dx*dx + dy*dy + dz*dz);
    }

}