// View the full problem and run the test cases at:
//  https://leetcode.com/problems/course-schedule/

function canFinish(numCourses, prerequisites) {
    const map = new Map();
    const seen = new Set();
    prerequisites.forEach(prereq => {
        let neighbors = map.get(prereq[0]);
        if (!neighbors) {
            neighbors = [];
            map.set(prereq[0], neighbors);
        }
        neighbors.push(prereq[1]);
    })
    const keys = map.keys();
    for (let key in keys) {
        if (seen.hasKey(key)) continue;
        const neighbors = map[key];
        for(let neighbor in neighbors)
    }
}
