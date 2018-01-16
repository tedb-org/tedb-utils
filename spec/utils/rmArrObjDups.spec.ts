import {rmArrObjDups} from "../../src";

describe("testing rmArrObjDups", () => {

    test("rmArrObjDups", () => {
        // length 20 docs
        const docs = [
            {a: 1, b: 2}, {a: 1, b: 2}, {a: 1, b: 2}, {a: 1, b: 2}, {a: 1, b: 2}, {a: 1, b: 2}, {a: 1, b: 2}, {
                a: 1,
                b: 2
            }, {a: 2, b: 3}, {a: 2, b: 3}, {a: 2, b: 3}, {a: 2, b: 3}, {a: 2, b: 3}, {a: 2, b: 3}, {a: 2, b: 3}, {
                a: 2,
                b: 3
            }, {a: 2, b: 3}, {a: 2, b: 3}, {a: 2, b: 3}, {a: 2, b: 3},
        ];
        let docs2 = [];
        for (let i = 0; i <= 10000; i++) {
            docs2 = [...docs2, ...docs];
        }
        expect(rmArrObjDups(docs, "a").length).toEqual(2);
        expect(rmArrObjDups(docs2, "a").length).toEqual(2);
    });
});
