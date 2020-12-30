function numRegions(graph) {
    const seen = new Set();
    const keys = Object.keys(graph);
    let numRegions = 0;

    for(let i = 0; i < keys.length; i++) {
        key = keys[i];
        console.log(seen);
        if (seen.has(key)) continue;

        const stack = [key];
        const curSeen = new Set(stack);
        let newRegion = true;

        while(curKey = stack.pop()) {
            const neighbors = graph[curKey];

            for(let j = 0; j < neighbors.length; j++) {
                const neighbor = neighbors[j];

                if (curSeen.has(neighbor)) continue;
                if (seen.has(neighbor)) {
                    curSeen.add(neighbor);
                    newRegion = false;
                    continue;
                }
                
                curSeen.add(neighbor)
                stack.push(neighbor);

            }
        }

        curSeen.forEach(val => seen.add(val));
        if (newRegion) numRegions++;
    }

    return numRegions;
}

module.exports = {
    numRegions
};