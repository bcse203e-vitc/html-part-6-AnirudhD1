function isPangram(sentence) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let lowerCaseSentence = sentence.toLowerCase();
    for (let char of alphabet) {
        if (!lowerCaseSentence.includes(char)) {
            return false;
        }
    }
    return true;
}

let sentence = "The quick brown fox jumps over the lazy dog";
console.log(isPangram(sentence) ? "✅ It is a pangram." : "❌ It is not a pangram.");
