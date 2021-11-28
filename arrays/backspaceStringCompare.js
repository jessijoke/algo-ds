var backspaceCompare = function(s, t) {
    let str1 = []
    let str2 = []
    let loopLength = Math.max(s.length, t.length)
    for (let i = 0; i < loopLength; i++) {
        if (s[i] !== undefined) {
           if (s[i] === "#") {
               str1.pop()
           } else {
               str1.push(s[i])
           }
        }
        if (t[i] !== undefined) {
           if (t[i] === "#") {
               str2.pop()
           } else {
               str2.push(t[i])
           }
        }
    }
    return str1.join("") === str2.join("") ? true : false
};