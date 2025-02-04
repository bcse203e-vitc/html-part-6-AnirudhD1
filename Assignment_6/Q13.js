function findSecondSmallestAndLargest(arr) {
    let uniqueArr = [...new Set(arr)].sort((a, b) => a - b);
    return {
        secondSmallest: uniqueArr[1],
        secondLargest: uniqueArr[uniqueArr.length - 2]
    };
}

let input = [4, 2, 9, 1, 5, 6];
let result = findSecondSmallestAndLargest(input);
console.log("Second Smallest:", result.secondSmallest);
console.log("Second Largest:", result.secondLargest);
