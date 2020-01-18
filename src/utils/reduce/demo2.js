/*
 * @Author: ly.guang
 * @Date: 2020-01-09 15:07:31
 * @Last Modified by: ly.guang
 * @Last Modified time: 2020-01-09 15:11:15
 *
 * 最大值
 */
const arr = [10, 20, 30, 40, 55];
// eslint-disable-next-line no-unused-vars
const max = arr.reduce((pre, cur, index, arr) => (pre > cur ? pre : cur));
console.log("max", max);
