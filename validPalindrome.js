// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters,
// it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

const validPalindrome = function (s) {
    const lowerS = s.toLowerCase();
    filteredS = lowerS.replace(/[^a-z0-9]/g)

    return s === filteredS.split("").reverse().join("")
}
let example = "manam"
console.log(validPalindrome(example));