var lengthOfLongestSubstring = function(s) {
    let substrings = []
    if (s.length === 0) return 0
    for (let i = 0; i < s.length; i++) {
        let currentString = ""
        for (let j = i; j < s.length; j++) {
            if (currentString.includes(s[j])) break
            currentString += s[j]
        }
        substrings.push(currentString)
    }
    return Math.max(...(substrings.map(string => string.length)))
};