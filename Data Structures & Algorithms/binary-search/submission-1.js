class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let half
        let offset = 0

        while(nums.length >1){
           half = Math.floor(nums.length /2 )  ;
           if(target === nums[half]){
            return half + offset
           }
           else if(target<nums[half]){
            nums = nums.slice(0, half)
           }
           else {
            offset+=half
            nums = nums.slice(half)
           
           }
        }

if (nums.length === 1 && nums[0] === target) {
    return offset
}

return -1        
    }
}
