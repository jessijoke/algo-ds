var runningSum = function(nums) {
    let total = 0
    let sumArr = []
    for (let i = 0; i < nums.length; i++) {
        total += nums[i]
        sumArr.push(total)
    }
    return sumArr
};