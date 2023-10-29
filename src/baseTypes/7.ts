/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum daysOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function isWeekend(day: daysOfWeek): boolean {
  return day === daysOfWeek.Saturday || day === daysOfWeek.Sunday
    ? true
    : false;
}

console.log("It's a day off?", isWeekend(daysOfWeek.Saturday)); // true
console.log("It's a day off?", isWeekend(daysOfWeek.Sunday)); // true
console.log("It's a day off?", isWeekend(daysOfWeek.Thursday)); // false
console.log("It's a day off?", isWeekend(daysOfWeek.Friday)); // false
