// You are given an integer array prices where prices[i] is the price of a given stock on the ith day.

// On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.

// Find and return the maximum profit you can achieve.

const prices1 = [7,1,5,3,6,4];
const prices2 = [1,2,3,4,5];
const prices3 = [7,6,4,3,1];

var maxProfit = function(prices) {
    let profits = 0;
    for(let i = 0; i < prices.length; i++) {
        if(prices[i] > prices[i - 1]) {
           profits += prices[i] - prices[i - 1]
        }
    }
    
    return profits;
};

console.log(maxProfit(prices1)); // output: 7
console.log(maxProfit(prices2)); // output: 4
console.log(maxProfit(prices3)); // output: 0