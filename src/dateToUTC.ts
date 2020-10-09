/**
 * This method converts a date to what the server will read in utc time.
 * Since the server Time Zone offset is 0.
 * This method preserves the local time by sending it to the server which
 * then converts it to UTC time which will add the appropriate time.
 *
 * @param {string} date
 * @returns {Date}
 */
export const dateToUTC = (date: Date): Date => {
    return new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
};
