class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let mapStoT = {}
        if(s.length !== t.length){
            return false
        }
        for(let i =0;i<s.length;i++){
            if(!mapStoT[s[i]]){
                mapStoT[s[i]] = 1
            }else{
                mapStoT[s[i]] += 1 
            }
        }
        console.log(mapStoT)
        for(let j = 0;j<t.length;j++){
            if(!mapStoT[t[j]]){
                return false
            }else{
               --mapStoT[t[j]] 
            }
        }

        for(let key in mapStoT){
            if(mapStoT[key]){
                return false
            }
            else{
                return true
            }
        }
    }
}
