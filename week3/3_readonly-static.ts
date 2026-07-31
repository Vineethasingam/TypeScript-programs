// Concept: readonly and static using GCD and LCM

class NumberOperations {
    readonly num1: number;
    readonly num2: number;

    static collegeName: string = "SVECW";

    constructor(a: number, b: number) {
        this.num1 = a;
        this.num2 = b;
    }

    findGCD(): number {
        let a = this.num1;
        let b = this.num2;

        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }

        return a;
    }

    findLCM(): number {
        return (this.num1 * this.num2) / this.findGCD();
    }
}

const obj = new NumberOperations(20, 30);

console.log(`College: ${NumberOperations.collegeName}`);
console.log(`Numbers: ${obj.num1}, ${obj.num2}`);
console.log(`GCD = ${obj.findGCD()}`);
console.log(`LCM = ${obj.findLCM()}`);
