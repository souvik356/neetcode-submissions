class Solution {
    /**
     * @param {string[]} details
     * @return {number}
     */
    countSeniors(details) {
        let count = 0
        for(let i=0;i<details.length;i++){
            let num = ""
            for(let j=11;j<13;j++){
                num =  num + details[i][j]
            }
            if(Number(num)>60){
                count = count + 1
            }
        }
        return count 
    }
}
