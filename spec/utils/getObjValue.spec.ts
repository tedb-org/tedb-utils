import {getObjValue} from '../../src';

describe('testing getObjValue', () => {
    test("getObjValue", () => {
        const doc = {
            name: "Charles Xavier",
            age: 78,
            occupation: "Professor",
            students: [
                "Wolverine",
                "Blue Falcon",
                "Chad",
            ],
            nested: {
                name: "sneaky",
            },
        };

        const key: string = getObjValue(doc, "name");
        const numKey: number = getObjValue(doc, "age");
        const missingKey: any = getObjValue(doc, "lost");
        const students: string[] = getObjValue(doc, "students");
        const nested: string = getObjValue(doc, "nested.name");

        expect(key).toBe("Charles Xavier");
        expect(numKey).toBe(78);
        expect(missingKey).toBe(undefined);
        expect(students).toEqual(expect.arrayContaining(["Wolverine", "Blue Falcon", "Chad"]));
        expect(nested).toBe("sneaky");
    });
});
