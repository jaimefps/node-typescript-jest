import { something, other } from '../src/test-functions';

describe('test-functions.ts tested', () => {
  it('something()', () => {
    expect(something({ a: 1, b: 'string' })).toEqual(1);
  });
  it('other()', () => {
    expect(other({ a: 1, b: 'string' })).toEqual('string');
  });
});
