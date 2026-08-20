class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        if (nums.length === 0) return
        let map ={}
        for (let i = 0; i < nums.length; i++) {

            let tHelp = target - nums[i]  ;

            if(map.hasOwnProperty(tHelp)) {
                return [i, map[tHelp]]
            }  

            map[nums[i]] = i


        }
    }
}
