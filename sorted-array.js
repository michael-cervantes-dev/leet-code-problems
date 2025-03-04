//Remove Duplicates from Sorted Array

// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

// Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
// Return k

let nums1 = [1,1,2];
let nums2 = [1,1,1,1,2,3,3,4,4,4]
let nums3 = [1,1,1,1,1,1,1,2,2,2,2,2,2,3,3,3,3,3,3]

var removeDuplicates = function(nums) {
    let count = 0;
    
    for(let i = 0; i < nums.length; i++) {
        if( nums[i] == nums[i + 1]) {
            continue;
        } 
       nums[count] = nums[i];
       count++;
    }
    return count;
};

console.log(removeDuplicates(nums1)); //output: 2
console.log(removeDuplicates(nums2)); //output: 4
console.log(removeDuplicates(nums3)); //ouput: 3