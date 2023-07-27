// You are given two integer arrays nums1 and nums2, 
// sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
// Merge nums1 and nums2 into a single array sorted in non-decreasing order.
// The final sorted array should not be returned by the function, but instead be stored inside the array nums1.
// To accommodate this, nums1 has a length of m + n, 
// where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored.
// Nums2 has a length of n.

/*  Pseudo-coded sequence

    Initialize the indicies of nums1, nums2, and the newly merged array nums1;
    If nums2 is not empty and the value at the last index of nums1 is greater than nums2,
    move that value to the newly merged array nums1,
    then decrement the index at nums1
    If the value at index nums2 is greater than the value at index nums1,
    move the value to the newly merged array nums1,
*/

function mergeArrays(nums1, m, nums2, n) {
    // Indicies initialized
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;

    // Checking if num2 isn't empty by checking if it's index is greater than or equals 0
    while (j >= 0) {
        // Checking if i is not also empty and comparing which is greater between nums1[i] and nums2[j]
        
        if (i >= 0 && nums1[i] > nums2[j]) { // If nums1[i] is greater than nums2[j], then assign it to the last index of nums1[k]
        
            nums1[k] = nums1[i];
        
            i--; // then decrement i, since we started from the last index so we decrement till we get to the begining "when index = 0"
        
        } else if (nums2[j] > nums1[i]) { // if the reverse is the case, (nums2[j] is greater than nums1[i])
        
            // assign it to the last index of the newly merged array nums1[k]
        
            nums1[k] = nums2[j];
        
            j--; // decrement index j
        }
        // then finally decrement index k 
        
        k--;
    }

}
let nums1 = [1, 3, 7, 8, 0, 0, 0, 0], m = 4
let nums2 = [2, 4, 5, 6], n = 4
mergeArrays(nums1, m, nums2, n);
console.log(nums1)
