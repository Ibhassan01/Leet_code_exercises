// Given a string s consisting of words and spaces, return the length of the last word in the string.
// A word is a maximal substring consisting of non-space characters only.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    const stringArray = s.split(' '); // Split the string into an array of individual words
    const lastWord = stringArray[stringArray.length - 1]; //Initialize the last word of the array
    return lastWord.length; //Return the length of the last word
};

let example = "This is a boy and a girl";
console.log(lengthOfLastWord(example));