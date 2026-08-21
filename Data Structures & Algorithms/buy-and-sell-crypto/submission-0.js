class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let min = prices[0];
        let profit = 0;
        for (let i = 0; i < prices.length; i++) {
            if (min < prices[i + 1]) {
                profit < prices[i + 1] - min ? profit = prices[i +               1] - min : ''
            }
            else{
                min = prices[i+1]
            }
        }
        return profit
    }
}
