// Work through this problem on https://leetcode.com/problems/minimum-path-sum/ and use the specs given there.
// Feel free to use this file for scratch work.

function minPathSum(grid) {
    let cols = grid.length;
    let rows = grid[0].length;
    for(let row = 1; row < rows; row++) {
        grid[0][row] += grid[0][row - 1]
    }
    for(let col = 1; col < cols; col++) {
        grid[col][0] += grid[col - 1][0] 
    }
    for(let col = 1; col < cols; col++) {
        for(let row = 1; row < rows; row++) {
            grid[col][row] += grid[col - 1][row] < grid[col][row - 1] ? grid[col - 1][row] : grid[col][row - 1];
        }
    }
    console.log(grid);
    return grid[cols - 1][rows - 1];
}

const grid = [[1,3,1],[1,5,1],[4,2,1]]
console.log(minPathSum(grid));