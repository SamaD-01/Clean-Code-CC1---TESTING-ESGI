import { describe, it, expect } from "vitest";
import { lancersYams } from ".";

describe("Yams game", () => {
    it.each([
        [null, [[1, 1, 1, 1, 1, 1]]],
        [null, [[7, 1, 1, 1, 1]]],
        [50, [[1, 1, 1, 1, 1]]],
        [100, [[1, 1, 1, 1, 1], [1, 1, 1, 1, 1]]],
        [75, [[1, 1, 1, 1, 1], [2, 3, 4, 5, 6]]],
        [50, [[1, 2, 3, 4, 5], [2, 3, 4, 5, 6]]],
    ])("Should return %s points, for %s dice roles", (expectedPoints, diceRoles) => {
        expect(lancersYams(diceRoles)).toBe(expectedPoints);
    })
})

