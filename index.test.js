import { describe, it, expect } from "vitest";
import { lancersYams } from ".";

describe("Yams game", () => {
    it.each([
        [null, [[1, 1, 1, 1, 1, 1]]],
        // [null, [[7, 1, 1, 1, 1]]],
        [50, [[1, 1, 1, 1, 1]]],
        [100, [[1, 1, 1, 1, 1], [1, 1, 1, 1, 1]]],
        [90, [[1, 1, 1, 1, 1], [2, 3, 4, 5, 6]]],
        [80, [[1, 2, 3, 4, 5], [2, 3, 4, 5, 6]]],
        [35, [[3, 3, 3, 3, 6]]],
        [28, [[2, 2, 2, 4, 5]]],
        [30, [[2, 2, 2, 5, 5]]],
    ])("Should return %s points, for %s dice roles", (expectedPoints, diceRoles) => {
        expect(lancersYams(diceRoles)).toBe(expectedPoints);
    })
})

