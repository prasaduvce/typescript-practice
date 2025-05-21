//type sumResult = 

let Add: (a: number, b: number) => number

let add = function add(num1: number, num2: number) : number {
    return num1+num2;
}

function logMessage(message: string): void {
    console.log('LOG is --> '+message);
}

function sum(...nums:any[]):number {
    let sum = 0;
    for (let i=0;i<nums.length;i++) {
        sum+=nums[i]
    }
    return sum;
}

sum(1, 2);
sum(1, 2, 3);

