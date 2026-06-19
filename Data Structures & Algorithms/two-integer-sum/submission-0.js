class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map={}
        for(let i=0;i<nums.length;i++){
            if(!map[nums[i]]) map[nums[i]] = i
        }
        // console.log(map)
        for(let i=0;i<nums.length;i++){
            let noToFind = target - nums[i]
            if(map[noToFind] && i !== map[noToFind]){
                return [i,map[noToFind]]
            }
        }
    }
}
