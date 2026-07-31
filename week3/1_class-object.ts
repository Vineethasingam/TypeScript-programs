// Concept: Class and Object using GCD and LCM

class NumberOperations {
    num1: number;
    num2: number;

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
const obj = new NumberOperations(12, 18);

console.log(`Numbers: ${obj.num1}, ${obj.num2}`);
console.log(`GCD = ${obj.findGCD()}`);
console.log(`LCM = ${obj.findLCM()}`);
