// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// You must implement a solution with a linear runtime complexity and use only constant extra space.

const singleNumber = (nums) => {
    if (nums.length === 0) {
        return 0;
    }
    let result = 0;
    for (let num of nums) {
        result ^= num;
    }
    return result;
}

const example = [1, 1, 2, 3, 3, 4, 4];
console.log(singleNumber(example));