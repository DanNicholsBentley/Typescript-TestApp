import {GraphicalElement} from '../Graphics/GraphicalElement';
import {Pipe} from '../Shapes/Pipe';
import {GateValve, BallValve} from '../Shapes/Valves';
import {IDrawMethodProps} from './IDrawMethodProps';

export const ExecuteDrawMethod = (drawMethod: string, props: IDrawMethodProps) : Array<GraphicalElement>  => {
    let graphics = new Array<GraphicalElement>();
    switch (drawMethod) {
        case 'Pipe':
            graphics = Pipe.Draw(props);
            break;
        case 'GateValve':
            graphics =  GateValve.Draw(props);
            break;
        case 'BallValve':
            graphics =  BallValve.Draw(props);
            break;
        default:
            break;

    }

    return graphics;



}

