var countMatches = function(items, ruleKey, ruleValue) {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
        if (ruleKey === "type") {
            if (items[i][0] === ruleValue) {
                total++
            }
        } else if (ruleKey === "color") {
            if (items[i][1] === ruleValue) {
                total++
            }
        } else if (ruleKey === "name") {
            if (items[i][2] === ruleValue) {
                total++
            }
        }
    }
    return total
};