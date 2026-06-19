class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.toLowerCase().split(' ').join('');
        console.log(s)
        let clean = s.replace(/[^a-zA-Z0-9]/g, "")
        console.log(clean)
        let len = clean.length
        for(let i=0;i<len/2;i++){
            if(clean[i] !== clean[len-i-1]){
                return false
            }
        }
        return true
    }
}
