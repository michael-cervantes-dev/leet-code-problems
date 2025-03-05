// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.


const nums1 = [1,2,3,4,5,6,7]
const k1 = 3

const nums2 = [-1,-100,3,99];
const k2 = 2

var rotate = function(nums, k) {
    let secondSet = nums.slice(nums.length - k)
    let firstSet = nums.slice(0, nums.length -k)
    nums = [...secondSet, ...firstSet]
    return nums;
};


console.log(
    rotate(nums1, k1) // output: [5,6,7,1,2,3,4]
)

console.log(
    rotate(nums2, k2) // output: [ 3, 99, -1, -100 ]
)