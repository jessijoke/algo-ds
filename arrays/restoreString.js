var restoreString = function(s, indices) {
    let result = new Array(s.length).fill(null)
    for (let i = 0; i < s.length; i++) {
        result[indices[i]] = s[i]
        //result.splice(indices[i], 0, s[i])
    }
    return result.join("")
};