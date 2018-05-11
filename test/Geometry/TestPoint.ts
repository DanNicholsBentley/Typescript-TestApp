import { expect } from 'chai';
import 'mocha';

import {Point} from '../../src/Geometry/Point';

describe('Point', () => {

    describe('Point Default Constructor', () => {
        it('should return 0,0,0', () => {
            let pt: Point = new Point();
            expect(pt.X).to.equal(0);
            expect(pt.Y).to.equal(0);
            expect(pt.Z).to.equal(0);

        })
    })

    describe('Point Constructor', () => {
        it('should return 1,2,3', () => {
            let pt: Point = new Point(1,2,3);
            expect(pt.X).to.equal(1);
            expect(pt.Y).to.equal(2);
            expect(pt.Z).to.equal(3);

        })
    })
});
