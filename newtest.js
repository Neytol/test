function generateRandomArray(length, min, max) {
    const arr = [];
    for (let i = 0; i < length; i++) {
        const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
        arr.push(randomNum);
    }
    return arr;
}

// Задаем параметры: длина массива, минимальное и максимальное значение
const randomArray = generateRandomArray(10, -10, 10);

// console.log(randomArray);


const a = [3, 5, 2, 2, 5];
const b = [3, 2, 5, 2, 5, 2, 5, 3];
const arr = [11, -86, -86, 201, 11, 86, 86, 86, 3, 201];

const c = [1, 4, 3, 2, 1, 8, 9, 1, 21, 2, 32, 12, 33, 2];
const r = [-1, 5, -6, 0, 7, 7, -1, -9, 6, 8];


function travel(arr) {
    let start = 0;
    let shortcut = 0;
    let bestPortal = 0;
    for (let i = 0; i < arr.length; i++) {
            let portal = arr.lastIndexOf(arr[i]);
            
            if (portal > bestPortal) {
                bestPortal = portal;
            }
        }
    
    console.log(bestPortal)
    while (start < arr.length - 1) {
        let currentCheck = arr.lastIndexOf(arr[start]);
        let frontCheck = arr.lastIndexOf(arr[start + 1]);
        let backCheck = arr.lastIndexOf(arr[start - 1]);
        
            if (start <= arr.indexOf(arr[bestPortal])) {
                console.log(arr.indexOf(arr[bestPortal]))
                if (currentCheck !== - 1 || frontCheck !== -1  || backCheck !== - 1) {
                    if ((currentCheck > frontCheck) && (currentCheck > backCheck)) {
                        start = currentCheck;
                        console.log('current')
                        
                    }
                    else if ((frontCheck > currentCheck) && (frontCheck > backCheck)) {
                        start = frontCheck;
                        shortcut++;
                        console.log('front')
                        
                        
                    }
                    else if ((backCheck > currentCheck) && (backCheck > frontCheck)) {
                        start = backCheck;
                        shortcut++;
                        console.log('back')
                        
                    }
                    else {
                        start++;
                        console.log('go')
                    }
                }
             
            }
            else {
                start = bestPortal;
                shortcut++;
                
                
            }
        shortcut++;
        console.log(arr[start])
    }
    
    return shortcut;
}


console.log(travel(r));




