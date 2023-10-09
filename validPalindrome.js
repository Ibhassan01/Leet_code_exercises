// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters,
// it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

const validPalindrome = function (s) {
    s = s.toLowerCase();
    s = s.replace(/[^a-z0-9]/g, '')

    return s === s.split('').reverse().join('')
}
let example = "A man, a plan, a canal: Panama"
console.log(validPalindrome(example));