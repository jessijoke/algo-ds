var maximumWealth = function(accounts) {
    let total = 0
    for (i = 0; i < accounts.length; i++) {
        const currentTotal = accounts[i].reduce((a, b) => a + b, 0)
        total = Math.max(currentTotal, total)
    }
    return total
};