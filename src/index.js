module.exports = function reverse (n) {
   const arrNum = (Math.abs(n) + '').split('')
   const arrNumReverse = arrNum.reverse().join('')
   return Number(arrNumReverse)
}
