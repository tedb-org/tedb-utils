/**
 * Checks current element if it empty
 *
 * Examples:
 * ~~~
 * isEmpty({}); // true
 * isEmpty([]); // true
 * isEmpty(""); // true
 * isEmpty(null); // true
 * isEmpty(undefined); // true
 * ~~~
 * @param obj
 * @returns {boolean}
 */
export const isEmpty = (obj: any) => {
    if (!obj && obj !== 0) {
        return true;
    }

    return (!(typeof(obj) === "number") && !Object.keys(obj).length && Object.prototype.toString.call(obj) !== '[object Date]')
};
