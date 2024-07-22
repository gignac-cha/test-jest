import { random } from '../sources/random';

describe('Random', () => {
    test('random()', () => {
        const value = random();
        expect(value).toBeGreaterThanOrEqual(0);
        expect(value).toBeLessThan(1);
    });
    test('random(x)', () => {
        const x = 100;
        const value = random(x);
        expect(value).toBeGreaterThanOrEqual(0);
        expect(value).toBeLessThan(x);
    });
    test('random(x, y)', () => {
        const x = 100;
        const y = 200;
        const value = random(x, y);
        expect(value).toBeGreaterThanOrEqual(x);
        expect(value).toBeLessThan(y);
    });
});
