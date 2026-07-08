class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let x=0
    while(x<strs[0].length){
        let ch=strs[0][x]
        for(let i=0;i<strs.length;i++){
            if(ch!==strs[i][x] || strs[i].length===x){
                return strs[0].slice(0,x)
            }
        }
        x=x+1
    }
    return strs[0]
    }
}
