class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let totalLength = nums.length * 2
        let ans = []
        let j=0
        let k=0
        while(j<totalLength){
            if(k == nums.length){
                k=0
            }
            ans.push(nums[k])
            k=k+1
            j=j+1
        }
        return ans 
    }
}
