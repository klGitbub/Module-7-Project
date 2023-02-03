function addToZero(nums) {
    for (let number of nums) {
        for (i = 1; i < nums.length; i++) {
            if (number + nums[i] === 0) {
                return true;
            }
        }
    }
    return false;
}
console.log(addToZero([]));
// -> False

console.log(addToZero([1]));
// -> False

console.log(addToZero([1, 2, 3]));
// -> False

console.log(addToZero([1, 2, 3, -2]));
// -> True

function hasUniqueChars(str) {
    let unique = "";
    for (let i = 0; i < str.length; i++) {
        if(unique.includes(str[i]) === false){
            return true;
        }
    }
    return false;
}
console.log(hasUniqueChars("Monday"));
// -> True

console.log(hasUniqueChars("Moonday"));
// -> False

function isPangram(str) {
    str = str.toLowerCase();
    const { length } = str;
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const alphaArray = alphabet.split('');
    for (let i = 0; i < str.length; i++){
        const el = str[i];
        const index = alphaArray.indexOf(el);
        if (index !== -1) {
            alphaArray.splice(index, 1);
        };
    };
    return !alphaArray.length;
}
console.log(isPangram("The quick brown fox jumps over the lazy dog!"));
// -> True

console.log(isPangram("I like cats, but not mice"));
// -> False

function findLongestWord(arr) {
    let word = "";
    for (let i = 0; i < arr.length; i++) {
        if (word.length < arr[i].length) {
            word = arr[i];
        }
    }
    return word.length;
}

console.log(findLongestWord(["hi", "hello"]));
// -> 5