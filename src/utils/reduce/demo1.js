/*
 * @Author: ly.guang
 * @Date: 2020-01-09 14:59:31
 * @Last Modified by: ly.guang
 * @Last Modified time: 2020-01-09 15:00:03
 * @Desc: 求和
 */
// eslint-disable-next-line no-undef
console.log("sum=" + sum);

// eslint-disable-next-line no-unused-vars
const arr1 = [12, 34, 23];
// eslint-disable-next-line no-undef
const sum1 = arr.reduce((total, num) => total + num, 10);
console.log("sum1=" + sum1);

var result = [
  { subject: "math", score: 88 },
  { subject: "chinese", score: 80 },
  { subject: "english", score: 90 }
];
const sum2 = result.reduce((total, item) => total + item.score, 0);
const sum3 = result.reduce((total, item) => total + item.score, -10);
console.log(`sum2=${sum2}`);
console.log(`sum3=${sum3}`);
