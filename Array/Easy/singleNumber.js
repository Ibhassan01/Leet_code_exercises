// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

const singleNumber = (nums) => {
    for(i = 0; i <nums.length; i++){
        let count = 0
        for(j =0; j<nums.length; j++){
            if(nums[i] === nums[j]){
                count++
            }
        }
        if(count === 1){
            return nums[i]
        }
    }
}

const nums = [1,2,1,2,3]
singleNumber(nums)