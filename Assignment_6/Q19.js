function findLongestWord(sentence) {
    let words = sentence.split(' ');
    let longestWord = words.reduce((longest, current) => {
        return current.length > longest.length ? current : longest;
    }, "");
    return longestWord;
}

let sentenceInput = "I love programming in JavaScript";
console.log("Longest Word:", findLongestWord(sentenceInput));
