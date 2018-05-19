export class Validation {

    public static IsPositiveNumber(prop: any) : boolean {
        return ((typeof prop == "number") && (prop > 0));
    }
    
}