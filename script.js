'use strict';

function daysInYear(year) {
  try {
    if (typeof year !== 'number' || !Number.isInteger(year)) {
      throw new Error();
    }
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0) ? 366 : 365;
  } catch {
    return 'exception';
  }
}