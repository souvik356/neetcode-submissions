class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let stack=[]
        let sum = 0
        for(let i=0;i<operations.length;i++){
            if(operations[i] == "+"){
                let peek1 = stack[stack.length-1]
                let peek2 = stack[stack.length-2]
                let sum = peek1 + peek2
                stack.push(sum)
            }
            else if(operations[i] == "D"){
                let peek = stack[stack.length-1]
                let double = peek * 2
                stack.push(double)
            }else if(operations[i] == "C"){
                stack.pop()
            }else{
                stack.push(Number(operations[i]))
            }
        }
        // sum
        // console.log(stack)
        for(let i=0;i<stack.length;i++){
            sum +=stack[i]
        }

        return sum
    }
}
