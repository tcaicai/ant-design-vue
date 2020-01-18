/*
 * @Author: ly.guang
 * @Date: 2020-01-09 16:37:43
 * @Last Modified by: ly.guang
 * @Last Modified time: 2020-01-09 17:13:15
 * 复杂运算
 */
var result = [
  { subject: "math", score: 90 },
  { subject: "chinese", score: 80 },
  { subject: "english", score: 95 }
];
var dis = {
  math: 0.5,
  chinese: 0.3,
  english: 0.2
};

var res = result.reduce((total, item) => {
  total += dis[item.subject] * item.score;
  return total;
}, 0);

console.log("total", res);

var prices = [{ price: 20 }, { price: 30 }, { price: 40 }];
var rates = {
  us: "6",
  eu: "7"
};

var initalState = { usTotal: 0, euTotal: 10 };

// eslint-disable-next-line no-redeclare
var res = prices.reduce(
  (total, item) =>
    Object.keys(rates).reduce((total1, item1) => {
      total[`${item1}Total`] += rates[item1] * item.price;
      return total;
    }, 0),
  initalState
);

console.log("res", res);
