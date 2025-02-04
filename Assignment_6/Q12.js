var arr = [1, 2, 3, 4, 2, 2];

function removeDuplicates(arr) {
    return [...new Set(arr)];
}

console.log(removeDuplicates(arr));