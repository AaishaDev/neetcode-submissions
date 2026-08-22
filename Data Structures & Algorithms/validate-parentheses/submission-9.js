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
            if(s[idx] === '[' || s[idx] === '{' || s[idx] === '(')
            {
                stack.push(s[idx])
            }
            else{
                if(brackets[s[idx]] == stack[stack.length - 1]){
                    stack.pop()
                }
            }
        }

        if(stack.length === 0) return true
        else return false
    }
}
