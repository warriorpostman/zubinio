import _ from 'lodash';

// const P = 10000; // principal
// const n = 12; // number of times per year interest is compounded
// const t = 50; // years money is invested 
// const r = .15; // annual interest rate

// Compound interest formula...pretty sweet.

/***
 * Args:
 * P principal amount
 * r Annual interest rate (decimal format)
 * n # of times per year interest is compounded
 * t # of years of total investment
 */
export function compoundInterest(P, r, n, t) {
  return P * Math.pow(1 + (r/n), n * t);
}

export function compoundInterestAnnualSeries(P, r, n, t) {
  return _.range(0, t).map(year => compoundInterest(P, r, n, year));
}

// console.log({ 
//   years: t, 
//   principalInDollars: P,
//   rate: Math.round(r * 100)
// });

// console.log(`Principal $${P}`);
// console.log(`Total after term: $${A.toFixed(2)}`);
// console.log(`Total Interest after term: $${(A - P).toFixed(2)}`);

// for (var x = 1; x <= t; x++ ) {
  // Show the curve in graph?
  // const A = compoundInterest(P, r, n, x);
  // console.log(`Total after term: $${A.toFixed(2)}`);
// }

