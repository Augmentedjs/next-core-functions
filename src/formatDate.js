/**
 * Format a date to US format (MM/DD/YYYY HH:mm AM/PM) or (MM/DD/YYYY) only
 * @param {date} date The date to format
 * @param {boolean} noTime Exclude the time
 * @returns {string} The formatted date
 */
const formatDate = (date, noTime) => {
  const year = date.getFullYear(),
    month = date.getMonth() + 1, // months are zero indexed
    day = date.getDate(),
    hour = date.getHours(),
    minute = date.getMinutes(),
    second = date.getSeconds(),
    hourFormatted = hour % 12 || 12, // hour returned in 24 hour format
    minuteFormatted = minute < 10 ? "0" + minute : minute,
    morning = hour < 12 ? "am" : "pm";
  if (noTime) {
    return `${month}/${day}/${year}`;
  }
  return `${month}/${day}/${year} ${hourFormatted}:${minuteFormatted}${morning}`;
};

export default formatDate;
