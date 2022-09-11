function PrimeNumber(n) {
    const PrimeArray=[];
    for(let i = 2; PrimeArray.length < n; i++) {
        let flag = false;
        for(let number = 0; number < i; number++) {
            if (i % PrimeArray[number] === 0) {
                flag = true;
                break;
            }
        }
        if (flag === false) {
            PrimeArray.push(i);
        }
    }
    return PrimeArray;
}

console.time();
console.log(PrimeNumber(process.argv[2]));
console.timeEnd()
