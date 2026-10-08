class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map()
        for(let i = 0 ; i < nums.length ; i++){
            const currentindex = nums[i]
            const complement = target - currentindex

            if(map.has(complement)){
                return [map.get(complement), i]
            }
            map.set(currentindex, i)
        } 
    }
}
