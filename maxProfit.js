// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction.
// If you cannot achieve any profit, return 0.

// e.g 

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

const prices = [3948, 343, 654, 237, 458, 3456, 193850, 4321, 6049, 309, 543, 747, 84949, 7484, 2923, 5759, 3829];

const maxProfit = (prices) => {
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            if (maxProfit < prices[j] - prices[i]){
                maxProfit = prices[j] - prices[i];
            }
        }
    }
    return maxProfit;
}

console.log(maxProfit(prices))

// This approach uses a brute force method to iterate over the prices and return the highest value
// It also has a time limit, meaning Ginormous array of prices will exceed time limit for the operation 😶
// I'll find a better solution to this problem.