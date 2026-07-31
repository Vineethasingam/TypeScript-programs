// Concept: Access Modifiers using GCD and LCM

class NumberOperations {
    private num1: number;
    private num2: number;

    constructor(a: number, b: number) {
        this.num1 = a;
        this.num2 = b;
    }

    public findGCD(): number {
        let a = this.num1;
        let b = this.num2;

        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }

        return a;
    }

    public findLCM(): number {
        return (this.num1 * this.num2) / this.findGCD();
    }
}

const obj = new NumberOperations(24, 36);

console.log(`GCD = ${obj.findGCD()}`);
console.log(`LCM = ${obj.findLCM()}`);
