// View the full problem and run the test cases at:
//  https://leetcode.com/problems/course-schedule/

// function canFinish(numCourses, prerequisites) {
//     const map = new Map();
//     const seen = new Set();
//     prerequisites.forEach(prereq => {
//         let neighbors = map.get(prereq[0]);
//         if (!neighbors) {
//             neighbors = [];
//             map.set(prereq[0], neighbors);
//         }
//         neighbors.push(prereq[1]);
//     })
//     const keys = map.keys();
//     for (let key of keys) {
//         if (seen.has(key)) continue;
//         seen.add(key);
//         const stack = [key];
//         const curSeen = new Set();
//         while(stack.length) {
//             const curKey = stack.pop();
//             const neighbors = map.get(curKey) || [];
//             for(let i = 0; i < neighbors.length; i++) {
//                 const neighbor = neighbors[i];
//                 if (curSeen.has(neighbor)) return false;
//                 seen.add(neighbor);
//                 curSeen.add(neighbor);
//                 stack.push(neighbor);
//             }
//         }
//     }
//     return true;
// }

// function canFinish(numCourses, prerequisites) {
//     const map = new Map();
//     prerequisites.forEach(prereq => {
//         let neighbors = map.get(prereq[0]);
//         if (!neighbors) {
//             neighbors = [];
//             map.set(prereq[0], neighbors);
//         }
//         neighbors.push(prereq[1]);
//     })
//     const keys = map.keys();
//     const seen = new Set();
//     console.log(map);
//     for (let key of keys) {
//         if (seen.has(key)) continue;
//         const stack = [key];
//         const curSeen = new Set(stack);
//         let curKey;
//         while ((curKey = stack.pop()) !== undefined) {
//             neighbors = map.get(curKey) || [];
//             // console.log(curKey);
//             for(let neighbor of neighbors) {
//                 if (seen.has(neighbor)) continue;
//                 if (curSeen.has(neighbor)) return false;
//                 curSeen.add(neighbor);
//                 stack.push(neighbor);
//             }
//         }
//         curSeen.forEach(item => seen.add(item));
//     }
//     return true;
// }

function canFinish(numCourses, prerequisites) {
    const map = new Map();
    let neighbors;
    prerequisites.forEach(prereq => {
        neighbors = map.get(prereq[0]);
        if (!neighbors) {
            neighbors = [];
            map.set(prereq[0], neighbors);
        }
        neighbors.push(prereq[1]);
    })
    const keys = map.keys();
    const doesNotLoop = new Set();
    const seen = new Set();
    for (let key of keys) {
        if (doesNotLoop.has(key)) continue;
        const stack = [key];
        while(stack.length) {
            curKey = stack[stack.length - 1];
            neighbors = map.get(curKey) || [];
            let done = true;
            for(let neighbor of neighbors) {
                if (doesNotLoop.has(neighbor)) continue;
                if (seen.has(neighbor)) return false;
                done = false;
                stack.push(neighbor);
            }
            if (done) doesNotLoop.add(stack.pop());
            seen.add(curKey);
        }
    }
    return true;
}

// const doesLoop = (node, map, seen = new Set(), doesNotLoop = new Set()) => {
//     for(let neighbor of (map.get(node) || [])) {
//         if (seen.has(neighbor) && !doesNotLoop.has(neighbor)) return true;
//         seen.add(neighbor);
//         if (doesLoop(neighbor, map, seen, doesNotLoop)) {
//             return true;
//         } else {
//             doesNotLoop.add(neighbor);
//         }
//     }
//     return false;
// }

let prereqs = [[3,0],[0,1]];
console.log(canFinish(null, prereqs)); //true

prereqs = [[1,0],[0,1]];
console.log(canFinish(null, prereqs)); //false

prereqs = [[1,0],[2,0]];
console.log(canFinish(null, prereqs)); //true

prereqs = [[0,1],[0,2],[1,2]];
console.log(canFinish(null, prereqs)); //true

prereqs = [[1,0],[2,6],[1,7],[6,4],[7,0],[0,5]];
console.log(canFinish(null, prereqs)); //true