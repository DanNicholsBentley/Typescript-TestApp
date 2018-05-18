import {GraphicalElement} from '../Graphics/GraphicalElement';
import {Pipe} from '../Shapes/Pipe';
import {GateValve, BallValve} from '../Shapes/Valves';
import {IDrawMethodProps} from './IDrawMethodProps';

export const ExecuteDrawMethod = (drawMethod: string, props: IDrawMethodProps) : Array<GraphicalElement>  => {
    switch (drawMethod) {
        case 'Pipe':
            return Pipe.Draw(props);
        case 'GateValve':
            return GateValve.Draw(props);
        case 'BallValve':
            return BallValve.Draw(props);
        default:
            return new Array<GraphicalElement>();
    }



}

