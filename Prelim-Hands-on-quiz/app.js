// Rabano, Rymbrent Maximillian L.
// WD-201
// 01-30-23

const calc = require('.//calculation.js');

console.log('addition 5 + 6 = ', calc.add(5, 6));
console.log('subtract 5 - 6 = ', calc.subtract(5, 6));
console.log('multiply 5 * 6 = ', calc.multiply(5, 6));
console.log('divide   5 / 6 = ', calc.divide(5, 6));
console.log();

const Rate = 300;
const hourWork = 4;
const daysPerWeek = 6;
const grossIncome = Rate * hourWork * daysPerWeek;

console.log('Rate per Hour', Rate);
console.log('Hour per Work', hourWork);
console.log('Days per Week', daysPerWeek);
console.log('Gross Income', grossIncome);
console.log();

const tax = calc.multiply(grossIncome, 0.1);
const sss = 1200;
const pagIbig = 300;
const philHealth = 400;
const deductions = tax + sss + pagIbig + philHealth;
const netSalary = calc.subtract(grossIncome, deductions);

console.log('Tax: ', tax);
console.log('SSS: ', sss);
console.log('PagIbig: ', pagIbig);
console.log('PhilHealth: ', philHealth);
console.log('Deductions: ', deductions);
console.log();
console.log('Net Salary: ', netSalary);
