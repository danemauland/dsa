// Work through this problem on https://leetcode.com/problems/climbing-stairs/ and use the specs given there.
// Feel free to use this file for scratch work.

function climbStairs(n) {
    const stop = Math.floor(n / 2) + 1;
    let sum = 0;
    for (let i = 0; i < stop; i++) {
        sum += fact(n - i) / (fact(n - 2 * i) * fact(i))
    }
    return sum;
}

const memo = [1]

const fact = n => {
    let len  = memo.length;
    while (len < n + 1) {
        memo.push(len * memo[len - 1]);
        len++;
    }
    return memo[n];
}