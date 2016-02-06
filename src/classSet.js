/**
 * ClassName helper for react components.
 * Usage:
 * classSet({
 *   hasClass: true,
 *   noClass: false
 * })
 */
const classSet = obj => Object.keys(obj).filter(prop => obj[prop]).join(' ')
export default classSet
