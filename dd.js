const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.on('line', (line) => {
    const islands = line.split(' ').map(Number);
    console.log(minStepsToReachLastIsland(islands));
    readline.close();
});

function minStepsToReachLastIsland(islands) {
    const n = islands.length;
    
    
    if (n === 1) return 0;

    
    const continentMap = new Map();
    for (let i = 0; i < n; i++) {
        const continent = islands[i];
        if (!continentMap.has(continent)) {
            continentMap.set(continent, []);
        }
        continentMap.get(continent).push(i);
    }

    
    const queue = [[0, 0]]; 
    
    
    const visited = new Array(n).fill(false);
    visited[0] = true;
    
    
    while (queue.length > 0) {
        const [currentIsland, steps] = queue.shift();

        
        if (currentIsland === n - 1) return steps;

        
        for (let neighbor of [currentIsland - 1, currentIsland + 1]) {
            if (neighbor >= 0 && neighbor < n && !visited[neighbor]) {
                visited[neighbor] = true;
                queue.push([neighbor, steps + 1]);
            }
        }

        
        const continent = islands[currentIsland];
        if (continentMap.has(continent)) {
            for (let neighbor of continentMap.get(continent)) {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push([neighbor, steps + 1]);
                }
            }
            
            continentMap.delete(continent);
        }
    }

    return -1; 
}