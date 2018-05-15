export class Utilities {
    private static maxId: number = 0;

    static NextId () : number {
        return ++this.maxId;
    }

}