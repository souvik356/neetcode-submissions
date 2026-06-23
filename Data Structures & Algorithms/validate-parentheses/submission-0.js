class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack=[]
        for(let i=0;i<s.length;i++){
            let ch = s[i]
            if(ch == "[" || ch == "(" || ch == "{"){
                stack.push(ch)
            }else{
                if(stack.length == 0) return false
                let peek = stack[stack.length-1]
                if((peek == "(" && ch == ")") || (peek=="[" && ch=="]") || (peek=="{" && ch=="}")){
                    stack.pop()
                }else{
                    return false
                }
            }
        }
        // console.log(stack)
        if(stack.length == 0){
            return true
        }else{
            return false
        }
    }
}
