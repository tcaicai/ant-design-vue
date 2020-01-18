/*
 * @Author: ly.guang
 * @Date: 2020-01-09 15:40:43
 * @Last Modified by: ly.guang
 * @Last Modified time: 2020-01-09 15:44:12
 * 字符串字母出现次数
 */
const str = "sfhjasfjgfasjuwqrqadqeiqsajsdaiwqdaklldflas-cmxzmnha";
const res = str.split("").reduce((total, cur) => {
  total[cur] ? total[cur]++ : (total[cur] = 1);
  return total;
}, {});

console.log(res);

// eslint-disable-next-line no-unused-vars
var arr;
