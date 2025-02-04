function sortArray(arr, ascending = true) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if ((ascending && arr[j] > arr[j + 1]) || (!ascending && arr[j] < arr[j + 1])) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

let numbers = [4, 2, 9, 1, 5, 6];
console.log("Ascending:", sortArray([...numbers]));
console.log("Descending:", sortArray([...numbers], false));
