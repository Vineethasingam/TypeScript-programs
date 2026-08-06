import {Numbers} from "./4_GCDLCM";
import {gcd,lcm,display} from "./4_GCDLCMLogic";
import {PROGRAM_NAME,VERSION} from "./4_Constants";


let values:Numbers={
    num1:12,
    num2:18
};


console.log(PROGRAM_NAME);
console.log("Version:",VERSION);


display(values);


console.log("GCD:",gcd(values.num1,values.num2));

console.log("LCM:",lcm(values.num1,values.num2));
