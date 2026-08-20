class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let chars = s.toLowerCase().replace(/[^a-z0-9]/g, '').split('')
        for(let i = 0; i<chars.length /2 ; i++){
            if(chars[i] === chars[chars.length - (i+1)]) continue ;
            else return false
        }
        return true
    }
}
