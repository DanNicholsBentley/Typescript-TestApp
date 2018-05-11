import { expect } from 'chai';
import 'mocha';

import {Constants} from '../../src/Geometry/Constants';
import {Vector} from '../../src/Geometry/Vector';

describe('Vector', () => {
    describe('Default Constructor', () => {
        it('should return 0,0,0', () => {
            let vec: Vector = new Vector();
            expect(vec.X).to.equal(0);
            expect(vec.Y).to.equal(0);
            expect(vec.Z).to.equal(0);

        })
    })

    describe('Constructor(1,2,3)', () => {
        it('should return 1,2,3', () => {
            let vec: Vector = new Vector(1,2,3);
            expect(vec.X).to.equal(1);
            expect(vec.Y).to.equal(2);
            expect(vec.Z).to.equal(3);

        })
    })

    describe('Magnitude(1,2,3)', () => {
        let x = 1;
        let y = 2;
        let z = 3;
        let vec = new Vector(x,y,z);
        let actualMag = Math.sqrt(x*x + y*y +z*z);
        it(`should return ${actualMag}`, () => {
            let mag = vec.Magnitude();
            expect(mag).to.approximately(actualMag, Constants.Tolerance);
        })
    })


});