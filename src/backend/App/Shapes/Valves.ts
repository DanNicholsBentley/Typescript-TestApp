import {GraphicalElement} from '../Graphics/GraphicalElement';
import {Line} from '../Graphics/Line';
import {Circle} from '../Graphics/Circle';
import {Point} from '../Geometry/Point';
import {IDrawMethodProps} from '../Model/IDrawMethodProps';
import {Validation} from '../Model/Validation';

export interface IValveBodyProps {len: number; od: number; [propName: string]: any;};

const IsValveBodyProps = (props: any) : props is IValveBodyProps => {
    return (
        Validation.IsPositiveNumber(props.len) &&
        Validation.IsPositiveNumber(props.od)
    );
}

export abstract class ValveBody {

    public static Draw(props: IDrawMethodProps) : Array<GraphicalElement> {
        let graphics = new Array<GraphicalElement>(); 
        if(!IsValveBodyProps(props))
            return graphics;

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

export interface IGateValveProps extends IValveBodyProps {};

const IsGateValveProps = (props: any) : props is IGateValveProps => {
    return (
        IsValveBodyProps(props)
    );
}

export class GateValve {
    public static Draw(props: IDrawMethodProps) : Array<GraphicalElement> {
        let graphics = new Array<GraphicalElement>(); 
        if(!IsGateValveProps(props)) {
            console.log("Invalid properties based to GateValve.Draw method");
            return graphics;
        }

        return ValveBody.Draw(props);
    }
}

export interface IBallValveProps extends IValveBodyProps {ballRadius: number};

const IsBallValveProps = (props: any) : props is IBallValveProps => {
    return (
        IsValveBodyProps(props) &&
        Validation.IsPositiveNumber(props.ballRadius)
    );
}

export class BallValve {
    public static Draw(props: IDrawMethodProps) : Array<GraphicalElement> {
        let graphics = new Array<GraphicalElement>(); 
        if(!IsBallValveProps(props)) {
            console.log("Invalid properties based to BallValve.Draw method");
            return graphics;
        }

        graphics = ValveBody.Draw(props);
        let p1 = new Point(props.len*0.5, 0, 0);
        graphics.push(new Circle(p1, props.ballRadius));

        return graphics;
    }
}