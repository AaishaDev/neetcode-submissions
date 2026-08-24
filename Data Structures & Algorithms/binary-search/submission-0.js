class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let half

        while(nums.length >1){
           half = Math.floor(nums.length /2 )  ;
           if(target === nums[half]){
            return half
           }
           else if(target<nums[half]){
            nums = nums.slice(0, half)
           }
           else {
            
            nums = nums.slice(half)
           
           }
        }

        return -1
        
    }
}
