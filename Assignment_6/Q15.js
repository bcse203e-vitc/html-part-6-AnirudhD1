function findMissingNumber(arr, N) {
    let expectedSum = (N * (N + 1)) / 2;
    let actualSum = arr.reduce((a, b) => a + b, 0);
    return expectedSum - actualSum;
}

let sequence = [1, 2, 3, 5, 6];
let N = 6;
console.log("Missing Number:", findMissingNumber(sequence, N));
