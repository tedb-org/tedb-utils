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

    if (!(typeof(obj) === "number") && !Object.keys(obj).length) {
        return true;
    }

    return false;
};
