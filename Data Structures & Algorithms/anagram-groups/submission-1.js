class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = {}
        for(let i=0;i<strs.length;i++){
            let str = strs[i].split("").sort().join("")
            if(!map[str]){
                map[str] = [strs[i]]
            }else{
                map[str].push(strs[i])
            }
        }
        // console.log(map)

        let ans = []
        for(let keys in map){
            ans.push(map[keys])
        }

        return ans
    }
}
