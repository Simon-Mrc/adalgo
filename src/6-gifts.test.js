import {suite, test, expect} from "vitest";
import {preferedKid, distributeGifts, totalPrice, mostExpensive, globalMostExpensive} from "./6-gifts.js";

suite("totalPrice", () => {
    // TODO: write some tests
    test("returns the sum of prices from a list of gifts", () => {
        const gifts = [
            { name: "iPhone", price: 800 },
            { name: "skateboard", price: 70 },
        ];

        expect(totalPrice(gifts)).toBe(870);
    });

    test("returns 0 for an empty gifts array", () => {
        const gifts = [];

        expect(totalPrice(gifts)).toBe(0);
    });

    test("returns the price when there is only one gift", () => {
        const gifts = [{ name: "apple", price: 1 }];

        expect(totalPrice(gifts)).toBe(1);
    });

    test("returns the correct total with multiple gifts of various prices", () => {
        const gifts = [
            { name: "laptop", price: 1200 },
            { name: "book", price: 15 },
            { name: "pen", price: 2 },
            { name: "headphones", price: 150 },
        ];

        expect(totalPrice(gifts)).toBe(1367);
    });

    test("returns the correct total with decimal prices", () => {
        const gifts = [
            { name: "coffee", price: 5.99 },
            { name: "sandwich", price: 12.50 },
            { name: "juice", price: 3.75 },
        ];

        expect(totalPrice(gifts)).toBeCloseTo(22.24); // Js missinterpretation with decimals
        // Console.log give 22.2400000000002 xD could have round it up in function tho
    });
});
;

suite("mostExpensive", () => {
    // TODO: write some tests
    test("returns the name of the most expensive gift", () => {
        const gifts = [
            { name: "iPhone", price: 800 },
            { name: "skateboard", price: 70 },
        ];

        expect(mostExpensive(gifts)).toBe("iPhone");
    });

    test("returns the most expensive when it's the first gift", () => {
        const gifts = [
            { name: "laptop", price: 1500 },
            { name: "book", price: 15 },
            { name: "pen", price: 2 },
        ];

        expect(mostExpensive(gifts)).toBe("laptop");
    });

    test("returns the most expensive when it's the last gift", () => {
        const gifts = [
            { name: "apple", price: 1 },
            { name: "orange", price: 2 },
            { name: "diamond", price: 5000 },
        ];

        expect(mostExpensive(gifts)).toBe("diamond");
    });

    test("returns the first most expensive gift when there are duplicates", () => {
        const gifts = [
            { name: "watch", price: 500 },
            { name: "ring", price: 500 },
            { name: "necklace", price: 300 },
        ];

        expect(mostExpensive(gifts)).toBe("watch");
    });

    test("returns the most expensive gift from a single gift array", () => {
        const gifts = [
            { name: "trophy", price: 100 },
        ];

        expect(mostExpensive(gifts)).toBe("trophy");
    });
});

suite("globalMostExpensive", () => {
    // TODO: write some tests
    test("returns the most expensive gift across multiple kids", () => {
        const kids = [
            { name: "Issa", gifts: [
                { name: "iPhone", price: 800 },
                { name: "skateboard", price: 70 },
            ]},
            { name: "Noor", gifts: [
                { name: "apple", price: 1 },
            ]},
        ];

        expect(globalMostExpensive(kids)).toBe("iPhone");
    });

    test("returns the most expensive gift when it's in the second kid's gifts", () => {
        const kids = [
            { name: "Alice", gifts: [
                { name: "book", price: 20 },
            ]},
            { name: "Bob", gifts: [
                { name: "laptop", price: 1200 },
                { name: "pen", price: 5 },
            ]},
        ];

        expect(globalMostExpensive(kids)).toBe("laptop");
    });

    test("returns the most expensive gift when multiple kids have multiple gifts", () => {
        const kids = [
            { name: "Charlie", gifts: [
                { name: "watch", price: 500 },
                { name: "ring", price: 300 },
            ]},
            { name: "Diana", gifts: [
                { name: "necklace", price: 400 },
                { name: "bracelet", price: 250 },
            ]},
            { name: "Eve", gifts: [
                { name: "diamond", price: 2000 },
                { name: "emerald", price: 1500 },
            ]},
        ];

        expect(globalMostExpensive(kids)).toBe("diamond");
    });

    test("returns the most expensive gift when it's the first gift of the first kid", () => {
        const kids = [
            { name: "Frank", gifts: [
                { name: "yacht", price: 500000 },
                { name: "car", price: 50000 },
            ]},
            { name: "Grace", gifts: [
                { name: "phone", price: 1000 },
            ]},
        ];

        expect(globalMostExpensive(kids)).toBe("yacht");
    });

    test("returns the most expensive gift when each kid has one gift", () => {
        const kids = [
            { name: "Henry", gifts: [
                { name: "gift1", price: 100 },
            ]},
            { name: "Ivy", gifts: [
                { name: "gift2", price: 250 },
            ]},
            { name: "Jack", gifts: [
                { name: "gift3", price: 150 },
            ]},
        ];

        expect(globalMostExpensive(kids)).toBe("gift2");
    });

    test("returns the most expensive gift with decimal prices", () => {
        const kids = [
            { name: "Kate", gifts: [
                { name: "coffee", price: 5.99 },
            ]},
            { name: "Liam", gifts: [
                { name: "premium_coffee", price: 15.75 },
                { name: "tea", price: 3.50 },
            ]},
        ];

        expect(globalMostExpensive(kids)).toBe("premium_coffee");
    });

    test("returns the most expensive gift when multiple gifts have the same highest price", () => {
        const kids = [
            { name: "Mia", gifts: [
                { name: "gemstone1", price: 1000 },
            ]},
            { name: "Noah", gifts: [
                { name: "gemstone2", price: 1000 },
                { name: "coin", price: 500 },
            ]},
        ];

        expect(globalMostExpensive(kids)).toBe("gemstone1");
    });
});


 suite("preferedKid", () => {
    test("returns the kid with the most expensive total", () => {
        const kids = [
            {
                name: "Issa",
                gifts: [
                    {name: "iPhone", price: 800},
                    {name: "skateboard", price: 70},
                ],
            },
            {
                name: "Noor",
                gifts: [{name: "apple", price: 1}],
            },
        ];

        expect(preferedKid(kids)).toBe("Issa");
    });

    test("works with only one kid", () => {
        const kids = [
            {
                name: "Amina",
                gifts: [
                    {name: "book", price: 20},
                    {name: "puzzle", price: 10},
                ],
            },
        ];

        expect(preferedKid(kids)).toBe("Amina");
    });

    test("properly use the sum of all gifts to choose", () => {
        const kids = [
            {
                name: "Clara",
                gifts: [
                    {name: "book", price: 20},
                    {name: "puzzle", price: 10},
                    {name: "jean", price: 70},
                    {name: "t-shirt", price: 20},
                ],
            },
            {
                name: "Nina",
                gifts: [{name: "jacket", price: 110}],
            },
        ];

        expect(preferedKid(kids)).toBe("Clara");
    });

    test("returns the first kid in case of tied total gift prices", () => {
        const kids = [
            {
                name: "Liam",
                gifts: [{name: "lego", price: 50}],
            },
            {
                name: "Emma",
                gifts: [{name: "doll", price: 50}],
            },
        ];

        expect(preferedKid(kids)).toBe("Liam");
    });

    test("handles kids with no gifts (treated as total = 0)", () => {
        const kids = [
            {
                name: "Maya",
                gifts: [],
            },
            {
                name: "Jonas",
                gifts: [{name: "ball", price: 10}],
            },
        ];

        expect(preferedKid(kids)).toBe("Jonas");
    });

    test("handles zero and negative gift prices correctly", () => {
        const kids = [
            {
                name: "Alex",
                gifts: [
                    {name: "rock", price: 0},
                    {name: "bad gift", price: -5},
                ],
            },
            {
                name: "Bella",
                gifts: [{name: "chocolate", price: 2}],
            },
        ];

        expect(preferedKid(kids)).toBe("Bella");
    });

    test("returns undefined if given an empty array", () => {
        expect(preferedKid([])).toBeUndefined();
    });

    test("works with many kids", () => {
        const kids = [
            {name: "A", gifts: [{name: "g1", price: 10}]},
            {name: "B", gifts: [{name: "g1", price: 20}]},
            {name: "C", gifts: [{name: "g1", price: 5}]},
            {name: "D", gifts: [{name: "g1", price: 40}]},
        ];

        expect(preferedKid(kids)).toBe("D");
    });
});

suite("distributeGifts", () => {
    const clone = (obj) => JSON.parse(JSON.stringify(obj));

    test("mutates the gifts array by emptying it", () => {
        const gifts = [
            {name: "Car", price: 50},
            {name: "Ball", price: 10},
        ];

        const kids = [
            {name: "A", behaviorScore: 1, gifts: []},
            {name: "B", behaviorScore: 0.5, gifts: []},
        ];

        distributeGifts(gifts, kids);

        expect(gifts).toEqual([]); // MUST be emptied
    });

    test("gives expensive gifts first", () => {
        const gifts = [
            {name: "Cheap", price: 10},
            {name: "Medium", price: 20},
            {name: "Expensive", price: 100},
        ];

        const kids = [
            {name: "A", behaviorScore: 1, gifts: []},
            {name: "B", behaviorScore: 0.5, gifts: []},
        ];

        distributeGifts(gifts, kids);

        expect(kids[0].gifts[0].name).toBe("Expensive");
    });

    test("balance priority over behaviorScore", () => {
        const gifts = [
            {name: "RC Car", price: 60},
            {name: "Lego", price: 40},
            {name: "Puzzle", price: 15},
            {name: "Candy", price: 10},
        ];

        const kids = [
            {name: "Alice", behaviorScore: 0.95, gifts: []},
            {name: "Bob", behaviorScore: 0.85, gifts: []},
            {name: "Charlie", behaviorScore: 0.4, gifts: []},
        ];

        distributeGifts(gifts, kids);

        // First two big gifts
        expect(kids.find((k) => k.name === "Alice").gifts).toEqual([{name: "RC Car", price: 60}]);
        expect(kids.find((k) => k.name === "Bob").gifts).toEqual([{name: "Lego", price: 40}]);

        // Smaller gifts go to lowest total = Charlie
        expect(kids.find((k) => k.name === "Charlie").gifts).toEqual([
            {name: "Puzzle", price: 15},
            {name: "Candy", price: 10},
        ]);
    });

    test("behaviorScore used when totals are equal", () => {
        const gifts = [
            {name: "Gift1", price: 30},
            {name: "Gift2", price: 20},
        ];

        const kids = [
            {name: "High", behaviorScore: 1, gifts: []},
            {name: "Low", behaviorScore: 0, gifts: []},
        ];

        distributeGifts(gifts, kids);

        expect(kids.find((k) => k.name === "High").gifts[0].name).toBe("Gift1");
        expect(kids.find((k) => k.name === "Low").gifts[0].name).toBe("Gift2");
    });

    test("kids can start with pre-filled gifts and accumulate correctly", () => {
        const gifts = [{name: "Toy", price: 30}];

        const kids = [
            {name: "A", behaviorScore: 1, gifts: [{name: "Book", price: 15}]},
            {name: "B", behaviorScore: 0.5, gifts: []},
        ];

        distributeGifts(gifts, kids);

        // B has 0 total → should receive the new gift
        expect(kids[1].gifts).toEqual([{name: "Toy", price: 30}]);
    });

    test("handles empty gifts gracefully", () => {
        const gifts = [];
        const kids = [{name: "A", behaviorScore: 1, gifts: []}];

        const result = distributeGifts(gifts, kids);

        expect(result).toBe(kids);
        expect(kids[0].gifts).toEqual([]);
    });

    test("handles empty kids array gracefully", () => {
        const gifts = [{name: "Gift", price: 50}];

        const kids = [];

        const result = distributeGifts(gifts, kids);

        // Should not crash
        expect(result).toEqual([]);
        // Should not modify gifts when there are no kids
        expect(gifts.length).toBe(1);
    });

    test("deterministic output: same input → same result", () => {
        const gifts1 = [
            {name: "A", price: 30},
            {name: "B", price: 20},
            {name: "C", price: 10},
        ];
        const gifts2 = clone(gifts1);

        const kids1 = [
            {name: "X", behaviorScore: 1, gifts: []},
            {name: "Y", behaviorScore: 0.5, gifts: []},
        ];
        const kids2 = clone(kids1);

        distributeGifts(gifts1, kids1);
        distributeGifts(gifts2, kids2);

        expect(kids1).toEqual(kids2);
    });

    test("large gift list distributes evenly and empties gifts", () => {
        const gifts = Array.from({length: 20}, (_, i) => ({
            name: `Gift${i}`,
            price: i + 1, // increasing prices
        }));

        const kids = [
            {name: "A", behaviorScore: 0.9, gifts: []},
            {name: "B", behaviorScore: 0.8, gifts: []},
            {name: "C", behaviorScore: 0.7, gifts: []},
        ];

        distributeGifts(gifts, kids);

        expect(gifts).toEqual([]); // MUST be empty

        // Totals should be balanced
        const totals = kids.map((k) => k.gifts.reduce((s, g) => s + g.price, 0));

        const max = Math.max(...totals);
        const min = Math.min(...totals);

        expect(max - min).toBeLessThanOrEqual(2); // very tight with 20 gifts
    });

    test("when behaviorScores tie, stable ordering assigns the more expensive first to the earlier kid", () => {
        const gifts = [
            {name: "Big", price: 50},
            {name: "Small", price: 10},
        ];

        const kids = [
            {name: "First", behaviorScore: 0.7, gifts: []},
            {name: "Second", behaviorScore: 0.7, gifts: []},
        ];

        distributeGifts(gifts, kids);

        expect(kids[0].gifts[0].name).toBe("Big");
        expect(kids[1].gifts[0].name).toBe("Small");
    });
});
