function decimalToBinary(num) {
    return num.toString(2);
}

function binaryToDecimal(binary) {
    return parseInt(binary, 2);
}

let decimalNumber = 10;
console.log("Binary:", decimalToBinary(decimalNumber));
console.log("Decimal:", binaryToDecimal("1010"));
