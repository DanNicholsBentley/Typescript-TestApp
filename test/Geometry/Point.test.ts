import { expect } from 'chai';
import 'mocha';

import {Point} from '../../src/backend/App/Geometry/Point';

describe('Point', () => {

    describe('Default Constructor', () => {
        it('should return 0,0,0', () => {
            let pt: Point = new Point();
            expect(pt.X).to.equal(0);
            expect(pt.Y).to.equal(0);
            expect(pt.Z).to.equal(0);

        })
    })

    describe('Constructor(1,2,3)', () => {
        it('should return 1,2,3', () => {
            let pt: Point = new Point(1,2,3);
            expect(pt.X).to.equal(1);
            expect(pt.Y).to.equal(2);
            expect(pt.Z).to.equal(3);

        })
    })

    describe('Offset 1,2,3 by -2,-4,-6', () => {
        it('should return -1, -2, -3', () => {
            let pt: Point = new Point(1,2,3).Offset(-2,-4,-6);
            expect(pt.X).to.equal(-1);
            expect(pt.Y).to.equal(-2);
            expect(pt.Z).to.equal(-3);

        })
    })
});
