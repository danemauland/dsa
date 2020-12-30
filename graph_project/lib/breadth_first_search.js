function breadthFirstSearch(startingNode, targetVal) {
    const queue = [startingNode];
    const nodesAlreadySeen = new Set(queue);
    for(let i = 0; i < queue.length; i++) {
        const node = queue[i];
        if (node.val === targetVal) return node;
        node.neighbors.forEach(neighbor => {
            if (!nodesAlreadySeen.has(neighbor)) {
                queue.push(neighbor);
                nodesAlreadySeen.add(neighbor);
            }
        })
    }
    return null;
}

module.exports = {
    breadthFirstSearch
};