// Work through this problem on https://leetcode.com/problems/coin-change-2/ and use the specs given there.
// Feel free to use this file for scratch work.

var change = function(amount, coins, memo = {}) {
    if (amount === 0) return 1;
    if (coins.length === 0) return 0;
    if (coins.length === 1) return (amount % coins[0] === 0 ? 1 : 0);
    
    if (coins.length in memo && amount in memo[coins.length]) return memo[coins.length][amount];
    
    if (coins[coins.length - 1] > amount) return change(amount, coins.slice(0,-1), memo);

    coin = coins[coins.length - 1];
    
    var ans = change(amount - coin, coins, memo) + change(amount, coins.slice(0,-1), memo);
    
    if (!memo[coins.length]) memo[coins.length] = {};
    memo[coins.length][amount] = ans;

    return ans;
}