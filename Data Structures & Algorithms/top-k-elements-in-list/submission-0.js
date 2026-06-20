class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map={}
        for(let i=0;i<nums.length;i++){
            if(!map[nums[i]]){
                map[nums[i]]=1
            }else{
                ++map[nums[i]]
            }
        }
         const result = Object.entries(map)
            .sort((a, b) => b[1] - a[1])
        let ans = []
        
            for(let i=0;i<k;i++){
                ans.push(Number(result[i][0]))
            }
        
        return ans
    }
}
