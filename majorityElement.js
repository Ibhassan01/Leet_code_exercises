// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times.
//You may assume that the majority element always exists in the array.
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let majority = null;
    let count = 0;

    for (const num of nums) {
        if (count === 0) {
            majority = num;
        }

        if(majority === num) {
            count++;
        } else {
            count--
        }
    }
    return majority
};

const nums = [1, 2, 3, 3, 5, 3, 2, 4]
console.log(majorityElement(nums));