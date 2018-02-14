/**
 * Set the given path of an object to the value given
 * @param obj
 * @param path
 * @param value
 * @returns {any}
 */
export const setObjValue = (obj: any, path: any, value: any): any => {
    if (typeof path === 'string') {
        return setObjValue(obj, path.split('.'), value);
    } else if (path.length === 1) {
        return obj[path[0]] = value;
    } else if (path.length === 0) {
        return obj;
    } else {
        return setObjValue(obj[path[0]], path.slice(1), value);
    }
};
