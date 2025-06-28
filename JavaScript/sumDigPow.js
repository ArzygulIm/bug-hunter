// The number 89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number: 
// 89 = 8^1 + 9^2
// The next number in having this property is 135
// See this property again: 
// 135 =1^1+3^2+5^3

function sumDigPow(a, b) {
  let arr = [];
  for (let i = a; i <= b; i++) {
    if (i === i.toString().split('').reduce((sum, digit, index) => sum + Math.pow(Number(digit), index + 1), 0)) {
      arr.push(i);
    }
  }
  return arr;
}


function filterFunc(n) {
  return `${n}`.split("").map((x, i) => x ** (i+1)).reduce((a, b) => a+b) == n;
}

function *range(a, b) {
  for (var i = a; i <= b; ++i) yield i;
}

function sumDigPow(a, b) {
  return Array.from(range(a, b)).filter(filterFunc);
}

function sumDigPow(a, b) {
  return Array(b-a+1).fill().map(() => a++).filter(val => val.toString().split('').map(x => parseInt(x)).reduce((total, v, i) => total + v ** (i+1)) == val);
}