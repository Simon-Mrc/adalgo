import {expect, test} from "vitest";
import {arrayToFrench} from "./3-arrayToFrench.js";

// TODO: test camelcase with one word, with multiple words and when the input is already camelcase
test("Some basics testing for arrayToFrench function", () => {
    expect(arrayToFrench(["test"])).toBe("test");
    expect(arrayToFrench(['un', 'deux', 'trois', 'soleil'])).toBe("un, deux, trois et soleil");
    expect(arrayToFrench(['noir', 'blanc'])).toBe("noir et blanc");
    expect(arrayToFrench([])).toBe("");
});