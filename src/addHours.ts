/**
 * Add Hours to a date -> the hours if enough will also push the date forward
 * or backwards.
 * @param {string} d
 * @param {number} h
 * @returns {Date}
 */
export const addHours = (d: string, h: number): Date => new Date(new Date(d).setTime(new Date(d).getTime() + (h * 60 * 60 * 1000)));
