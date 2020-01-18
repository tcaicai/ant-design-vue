/*
 * @Author: ly.guang
 * @Date: 2020-01-09 17:13:36
 * @Last Modified by: ly.guang
 * @Last Modified time: 2020-01-09 17:23:40
 * 扁平多维数组
 */

var arr = [
  [1, 2, 8],
  [3, 4, 9],
  [5, 6, 10]
];
var res = arr.reduce((total, cur) => {
  return total.concat(cur);
}, []);
console.log("res", res);
