import { describe, it, expect } from 'vitest';
import { getYamsPoints } from './index';

describe("get points for a dice roll of Yams ", () => {
    it("should return Brelan (28 points) for a roll of [4, 4, 4, 2, 5]", () => {
        const roll = [[4, 4, 4, 2, 5]];
        const points = getYamsPoints(roll);
        expect(points).toBe(28);
    });
});