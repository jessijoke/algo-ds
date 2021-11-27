var containsDuplicate = function(nums) {
    let numberMap = {}
    for (let i = 0; i < nums.length; i++) {
        if (numberMap[nums[i]]) {
            return true
        } else {
            numberMap[nums[i]] = true
        }
    }
    return false
};