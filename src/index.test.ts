import { describe, it, expect } from 'vitest';
import { getYamsPoints } from './index';

describe("get points for a dice roll of Yams ", () => {
    it("should return Brelan (28 points) for a roll of [4, 4, 4, 2, 5]", () => {
        const rolls = [[4, 4, 4, 2, 5]];
        const points = getYamsPoints(rolls);
        expect(points).toBe(28);
    });

    it("should return Carré (35 points) for a roll of [6, 6, 6, 6, 2]", () => {
        const rolls = [[6, 6, 6, 6, 2]];
        const points = getYamsPoints(rolls);
        expect(points).toBe(35);
    });
});