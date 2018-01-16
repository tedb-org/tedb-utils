import {addHours} from './addHours';
/**
 * Date should be the new Date('from server string date')
 * that gets converted to local time which will be off.
 * Since the server will send back the right time but with the UTC
 * as GMT+0000 (UTC) we need to add the hour offset because a new date
 * will create the right time but with the hour offset. Now this will
 * convert it correctly.
 * @param {Date} date
 * @returns {Date}
 * @constructor
 */
export const UTCtoLocaleDate = (date: Date): Date => {
    return addHours(date.toUTCString(), new Date().getTimezoneOffset() / 60);
};
