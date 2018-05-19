import {GraphicalElement} from '../Graphics/GraphicalElement';
import {Line} from '../Graphics/Line';
import {Point} from '../Geometry/Point';
import {IDrawMethodProps} from '../Model/IDrawMethodProps';
import {Validation} from '../Model/Validation';

export interface IPipeProps {len: number; od: number; [others: string] : any;};

const IsPipeProps = (props: any) : props is IPipeProps => {
    return (
        Validation.IsPositiveNumber(props.len) &&
        Validation.IsPositiveNumber(props.od)
    );
}

export class Pipe {

    public static Draw(props: IDrawMethodProps) : Array<GraphicalElement> {
        let graphics = new Array<GraphicalElement>();
        if(!IsPipeProps(props)) {
            console.log("Invalid properties based to Pipe.Draw method");
            return graphics;
        }

        let p1 = new Point(0,props.od*0.5,0);
        let p2 = new Point(0,-props.od*0.5,0);
        let p3 = new Point(props.len,-props.od*0.5,0);
        let p4 = new Point(props.len,props.od*0.5,0);

        graphics.push(new Line(p1, p2));
        graphics.push(new Line(p2, p3));
        graphics.push(new Line(p3, p4));
        graphics.push(new Line(p4, p1));

        return graphics;
    }
}
