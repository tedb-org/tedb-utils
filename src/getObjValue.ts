/**
 * Get value given the Path as "path.to.nested" string
 * @param obj
 * @param path
 */
export const getObjValue = (obj: any, path: string) => {
    return path.split(".").reduce((o, i) => {
        if (o !== undefined) {
            return o[i];
        }
    }, obj);
};
