function Lcm(){
    const number1 = parseInt(prompt('Enter a first positive integer: '));
const number2 = parseInt(prompt('Enter a second positive integer: '));

// looping from 1 to number1 and number2
for (let i = 1; i <= number1 && i <= number2; i++) {

    // check if is factor of both integers
    if( number1 % i == 0 && number2 % i == 0) {
        hcf = i;
    }
}
let lcm=a*b/hcf;
// display the hcf
console.log(`LDM of ${number1} and ${number2} is ${lcm}.`);

}