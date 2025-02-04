function firstNonRepeatingCharacter(str) {
    for (let char of str) {
        if (str.indexOf(char) === str.lastIndexOf(char)) {
            return char;
        }
    }
    return null;
}

let inputString = "swiss";
console.log("First Non-Repeating Character:", firstNonRepeatingCharacter(inputString));
