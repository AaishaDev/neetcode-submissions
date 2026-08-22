class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];
        let brackets ={
        '}' : '{',
        ']' : '[',
        ')' : '('
        }
        for(const idx in s){
            if(s[idx] === '[' || '{' , '(')
            {
                stack.push(s[idx])
            }
            else{
                if(brackets[s[idx]] == stack[s.length - idx]){
                    stack.pop()
                }
                else return false
            }
        }
        return true
    }
}
