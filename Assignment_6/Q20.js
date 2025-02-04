function countCharacterOccurrences(str) {
    let charCount = {};
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    return charCount;
}

let stringInput = "hello";
console.log("Character Occurrences:", countCharacterOccurrences(stringInput));
