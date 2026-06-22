class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        // let k=0
        for(let i=0;i<arr.length-1;i++){
            let max = 0
            for(let j =i+1;j<arr.length;j++){
                max = Math.max(arr[j],max)
                arr[i]=max
                // k=k+1
            }
        }
        arr[arr.length-1] = -1
        return arr
    }
}
