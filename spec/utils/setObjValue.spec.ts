import {setObjValue} from '../../src';

describe('testing setPath', () => {
    const obj = {
        notNested: 'str',
        num: 3,
        nested: {
            O: {
                is: 'nested',
                num: 3,
            },
        },
        canUndefine: 3,
    };

    test('setting nested path', () => {
        const path = 'nested.O.is';
        setObjValue(obj, path, 'NESTED');
        expect(obj.nested.O.is).toEqual('NESTED');
    });

    test('setting non nested path', () => {
        const path = 'notNested';
        setObjValue(obj, path, 'string');
        expect(obj.notNested).toEqual('string');
    });

    test('setting value to undefined', () => {
        const path = 'canUndefine';
        setObjValue(obj, path, undefined);
        expect(obj.canUndefine).toBe(undefined);
    })
});
