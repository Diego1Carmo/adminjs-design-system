"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pad = exports.formatDateTime = exports.formatDate = exports.formatDateProperty = void 0;
/**
 * adds leading 0 to the number when it is lower than 10
 * @param {number} pad        number - i.e 8
 * @returns {sting}           formatted number: i.e. "08"
 * @memberof module:@adminjs/design-system
 */
const pad = (n) => (n < 10 ? `0${n.toString()}` : n.toString());
exports.pad = pad;
/**
 * Formats date to YYYY-MM-DD
 *
 * @param   {Date}    date
 * @return  {string}
 * @memberof module:@adminjs/design-system
 */
const formatDate = (date) => `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
exports.formatDate = formatDate;
/**
 * Formats date to HH:mm
 *
 * @param   {Date}    date
 * @return  {string}
 * @memberof module:@adminjs/design-system
 */
const formatTime = (date) => `${pad(date.getHours())}:${pad(date.getMinutes())}`;
/**
 * Formats date to YYYY-MM-DD HH:mm
 *
 * @param   {Date}    date
 * @return  {string}
 * @memberof module:@adminjs/design-system
 */
const formatDateTime = (date) => `${formatDate(date)} ${formatTime(date)}`;
exports.formatDateTime = formatDateTime;
/**
 * Based on the property type formats date to either YYYY-MM-DD HH:mm or YYYY-MM-DD
 *
 * @param   {Date}    date
 * @param   {PropertyType}    propertyType
 * @return  {string}
 * @memberof module:@adminjs/design-system
 */
const formatDateProperty = (date, propertyType) => {
    if (propertyType === 'date') {
        return formatDate(date);
    }
    return formatDateTime(date);
};
exports.formatDateProperty = formatDateProperty;
