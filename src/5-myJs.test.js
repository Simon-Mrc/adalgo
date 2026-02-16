import {suite, test, expect} from "vitest";
import {myIncludes, myJoin, myObjectKeys, myObjectEntries, myIndexOf, myStartsWith, myRepeat} from "./5-myJs";

suite("myJs", () => {
    test("myIncludes", () => {
        expect(myIncludes(["a", "b", "c"], "b")).toBe(true);
        expect(myIncludes(["a", "b", "c"], "d")).toBe(false);
        expect(myIncludes([], "a")).toBe(false);
        expect(myIncludes(["hello"], "hello")).toBe(true);
        expect(myIncludes(["1", "2", "3"], "2")).toBe(true);
    });

    // TODO: test myIndexOf
    test("myIndexOf", () => {
        expect(myIndexOf(["a", "b", "c"], "b")).toBe(1);
        expect(myIndexOf(["a", "b", "c"], "d")).toBe(-1);
        expect(myIndexOf([], "a")).toBe(-1);
        expect(myIndexOf(["hello"], "hello")).toBe(0);
        expect(myIndexOf(["1", "2", "2"], "2")).toBe(1);
    });

    // TODO: test myStartsWith
    test("myStartsWith", () => {
        expect(myStartsWith("hello", "he")).toBe(true);
        expect(myStartsWith("hello", "hello")).toBe(true);
        expect(myStartsWith("hello", "ello")).toBe(false);        
        expect(myStartsWith("hello", "world")).toBe(false);
        expect(myStartsWith("hello", "")).toBe(true);
        expect(myStartsWith("", "hello")).toBe(false);
        expect(myStartsWith("", "")).toBe(true);
        expect(myStartsWith("a", "b")).toBe(false);
        expect(myStartsWith("Hello", "hello")).toBe(false);
        expect(myStartsWith("Hello", "Hello")).toBe(true);
        expect(myStartsWith("hi", "hello")).toBe(false);
        expect(myStartsWith("123abc", "123")).toBe(true);
        expect(myStartsWith("!@#$%", "!@")).toBe(true);
    });
    // TODO: test myRepeat
    test("myRepeat", () => {
        expect(myRepeat("a", 3)).toBe("aaa");
        expect(myRepeat("ab", 3)).toBe("ababab");
        expect(myRepeat("hello", 1)).toBe("hello");
        expect(myRepeat("hello", 0)).toBe("");
        expect(myRepeat("", 5)).toBe("");
        expect(myRepeat("", 0)).toBe("");
        expect(myRepeat(" ", 3)).toBe("   ");
        expect(myRepeat("a b", 2)).toBe("a ba b");
        expect(myRepeat("!", 4)).toBe("!!!!");
        expect(myRepeat("x", 5)).toBe("xxxxx");
    });

    test("myJoin", () => {
        expect(myJoin(["a", "b", "c"], "-")).toBe("a-b-c");
        expect(myJoin(["hello", "world"], " ")).toBe("hello world");
        expect(myJoin([], ",")).toBe("");
        expect(myJoin(["x"], ",")).toBe("x");
        expect(myJoin(["", ""], ",")).toBe(",");
    });

    test("myObjectKeys", () => {
        expect(myObjectKeys({a: 1, b: 2})).toEqual(["a", "b"]);
        expect(myObjectKeys({})).toEqual([]);
        expect(myObjectKeys({x: undefined, y: null})).toEqual(["x", "y"]);
    });

    // TODO: test myObjectEntries
});
