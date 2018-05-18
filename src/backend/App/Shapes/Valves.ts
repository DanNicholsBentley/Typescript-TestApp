import {GraphicalElement} from '../Graphics/GraphicalElement';
import {Line} from '../Graphics/Line';
import {Circle} from '../Graphics/Circle';
import {Point} from '../Geometry/Point';
import {IDrawMethodProps} from '../Model/IDrawMethodProps';

//export interface IValveProps {len: number; od: number; [propName: string]: any;};
export abstract class ValveBody {

    public static Draw(props: IDrawMethodProps) : Array<GraphicalElement> {
        let graphics = new Array<GraphicalElement>(); 
        let p1 = new Point(0,props.od*0.5,0);
        let p2 = new Point(0,-props.od*0.5,0);
        let p3 = new Point(props.len,props.od*0.5,0);
        let p4 = new Point(props.len,-props.od*0.5,0);

        graphics.push(new Line(p1, p2));
        graphics.push(new Line(p2, p3));
        graphics.push(new Line(p3, p4));
        graphics.push(new Line(p4, p1));

        return graphics;
    }
}

//export interface IGateValveProps extends IValveProps {};
export class GateValve {
    public static Draw(props: IDrawMethodProps) : Array<GraphicalElement> {
        {
            return ValveBody.Draw(props);
        }
    }
}

//export interface IBallValveProps extends IValveProps {ballRadius?: number};
export class BallValve {
    public static Draw(props: IDrawMethodProps) : Array<GraphicalElement> {
        let graphics = ValveBody.Draw(props);
        let p1 = new Point(props.len*0.5, 0, 0);
        let ballRadius = props.ballRadius ? props.ballRadius : props.od*0.75;
        graphics.push(new Circle(p1, ballRadius));

        return graphics;
    }
}