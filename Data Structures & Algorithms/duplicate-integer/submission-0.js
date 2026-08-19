class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        if(nums.length ===0) return false
        let numSet = new Set();
        let exist ;
        for(let i = 0 ; i<nums.length ; i++){
            if(numSet.has(nums[i])) {
                exist = true
                break
            }
            numSet.add(nums[i])
        }
        if(exist) return exist 
        else {return false}
    }
}

