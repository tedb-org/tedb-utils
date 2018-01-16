import {getObjValue} from './getObjValue'

/**
 * Given an array of object. If you know the path to the value given 'path.to.value'
 * then you can get the index of that obj in the array of similar object.
 * Cannot search for index if all objects do not have that value.
 * @param {T[]} objs
 * @param {string} path
 * @param value
 * @returns {number}
 */
export function findObjArrIndex<T>(objs: T[], path: string, value: any): number{
    return objs.reduce((acc: number, cur: T, ind: number) => {
        if (getObjValue(cur, path) === value) {
            return ind;
        } else {
            return acc;
        }
    }, 0);
}
