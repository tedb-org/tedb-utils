/**
 * Remove duplicate objects from array comparing certain unique field.
 *
 * Example:
 * ~~~
 * let a = [{_id: 1, name: "ch"}, {_id: 1, name: "ch"}]
 * rmDups(a, "_id"); // [{_id: 1, name: "ch"}]
 * ~~~
 * @param arr
 * @param field
 * @returns {any[]}
 */
export const rmArrObjDups = (arr: any[], field: string): any[] => {
    return arr.filter((obj, pos, ray) => {
        return (pos === ray.findIndex((t) => {
            return t[field] === obj[field];
        }));
    });
};
