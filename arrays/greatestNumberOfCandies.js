var kidsWithCandies = function(candies, extraCandies) {
    const maxCandy = Math.max(...candies)
    let isMaxCandy = []
    for (let i = 0; i < candies.length; i++) {
        isMaxCandy.push((candies[i] + extraCandies) >= maxCandy ? true : false)   
    }
    return isMaxCandy
};