import { other } from '../src/index';

describe('index.ts tested', () => {
  it('other()', () => {
    expect(other({ a: 1, b: 'string' })).toEqual('string');
  });
});
