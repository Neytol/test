const c = [2, 5, 3, 4, 6, 7, 10, 9, 1, 8];
const a = [1, 2, 3, 4, 5];

function func() {
    let num = 0;
    while (num < 10) {
        setTimeout(num++, 5000);
    }
    return num;
}

console.log(func())