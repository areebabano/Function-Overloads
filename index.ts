// function overloads

function add(arg1: string, arg2: string): string
function add(arg1: number, arg2: number): number
function add(arg1: boolean, arg2: boolean): boolean


function add(arg1: any, arg2: any): any{
    return arg1 + arg2
}

console.log(add("Areeba","bano"))
console.log(add(12,3))
console.log(add(true,false))
// console.log(add(["areeba"],["fabiha"])); // error



