import { describe, it, expect } from "vitest";
import { lancersYams } from ".";

describe("Yams game", () => {
    it.each([
        [null, [[1, 1, 1, 1, 1, 1]]],
        [50, [[1, 1, 1, 1, 1]]],
        [100, [[1, 1, 1, 1, 1], [1, 1, 1, 1, 1]]],
    ])("Should return %s points, for %s dice roles", (expectedPoints, diceRoles) => {
        expect(lancersYams(diceRoles)).toBe(expectedPoints);
    })
})

