// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
// typically using all the original letters exactly once.

// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:
// Input: s = "rat", t = "car"
// Output: false


function isAnagram(s, t) {
    let sArray = s.split("")
    let tArray = t.split("")
    if (sArray.length !== tArray.length) {
        return false
    }

    let newS = sArray.sort().join()
    let newT = tArray.sort().join()

    return newS === newT;
}
let s = "dIg"
let t = "dgI"
console.log(isAnagram(s, t)); 