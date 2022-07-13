const leapYear = (year) => {
  if ((0 == year % 4 && 0 != year % 100) || 0 == year % 400) {
    return "Kabisat";
  } else {
    return "Bukan Kabisat";
  }
};

console.log(leapYear(1900));
console.log(leapYear(2000));
