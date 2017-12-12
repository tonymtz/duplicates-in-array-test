import {expect} from 'chai';
import dupl from './dupl';

describe('dupl.js', () => {
    it('#hello - tests if loaded correctly', () => {
        expect(dupl.hello('world')).to.equal('hello, world');
    });

    it('#badMethod - should remove duplicated strings mutating original array', () => {
        const myArray = ['foo', 'bar', 'baz', 'foo', 'baz', 'foo'];
        dupl.badMethod(myArray);
        expect(myArray).to.deep.equal(['', 'bar', '', '', '', '']);
    });

    it('#betterMethod - should remove duplicated strings mutating original array', () => {
        const myArray = ['foo', 'bar', 'baz', 'foo', 'baz', 'foo'];
        dupl.betterMethod(myArray);
        expect(myArray).to.deep.equal(['', 'bar', '', '', '', '']);
    });

    it('#optimizedMethod - should remove duplicated strings mutating original array', () => {
        const myArray = ['foo', 'bar', 'baz', 'foo', 'baz', 'foo'];
        dupl.optimizedMethod(myArray);
        expect(myArray).to.deep.equal(['', 'bar', '', '', '', '']);
    });
});
