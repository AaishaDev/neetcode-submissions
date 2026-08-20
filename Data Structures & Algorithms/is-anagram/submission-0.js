class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }
        let mapS = new Map();
        // let mapT = new Map();

        for (let char of s) {

            mapS.get(char) ? mapS.set(char, mapS.get(char) + 1) : mapS.set(char, 1)
        }
        for (let char of t) {
            mapS.get(char) ? mapS.set(char, mapS.get(char) - 1) : null;
        }

        for (const [key, value] of mapS) {
          if (mapS.get(key) !== 0) {
            return false;
          } 
        }
        return true
    }
}
