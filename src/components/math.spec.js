import { sum } from './math';

describe('math.js', () => {
  test('10 + 20 = 30', () => {
    const result = sum(10, 20);
    expect(result).toBe(30);
  });
});
