class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        for(let i = 0; i<nums.length ; i++){
            if(i !== nums[i]){
                return i
            }
        }
    }
}
