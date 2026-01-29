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

    it("should return full (30 points) for a roll of [2, 2, 2, 5, 5]", () => {
        const rolls = [[2, 2, 2, 5, 5]];
        const points = getYamsPoints(rolls);
        expect(points).toBe(30);
    });

    it("should return Grande suite (40) for a roll of [1, 2, 3, 4, 5]", () => {
        const rolls = [[1, 2, 3, 4, 5]];
        const points = getYamsPoints(rolls);
        expect(points).toBe(40);
    });
});