function maxValue(node, visited=new Set()) {
    let max = -Infinity;
    node.neighbors.forEach(childNode => {
        if (!visited.has(childNode)) {
            visited.add(childNode);
            childMax = maxValue(childNode, visited);
            if (childMax > max) max = childMax;
        }
    })
    if (node.val > max) max = node.val;
    return max;
}

module.exports = {
    maxValue
};