class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let min = prices[0];
        let profit = 0;
        for (let i = 1; i < prices.length; i++) {
            if (min < prices[i]) {
                profit < prices[i + 1] - min ? profit = prices[i] - min : ''
            }
            else{
                min = prices[i]
            }
        }
        return profit
    }
}
