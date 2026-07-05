class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxArea = 0
        for(let i = 0;i<heights.length;i++){
            for(let j = i+1;j<heights.length;j++){
                let area = Math.min(heights[i],heights[j]) * (j-i)
                maxArea = Math.max(maxArea,area)
            }
        }
        return maxArea
    }
}
