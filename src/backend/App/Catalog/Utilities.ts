import moment from 'moment';

export class Utilities {
    private static maxId: number = 0;

    static NextId () : number {
        return ++this.maxId;
    }

    static Now = () =>  moment().format('MMMM Do YYYY, h:mm:ss a');


}