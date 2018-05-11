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


}