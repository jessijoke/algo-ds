var twoSum = function(nums, target) {
    let numMap = {}
    for (let i = 0; i < nums.length; i++) {
        if (numMap.hasOwnProperty((target - nums[i]))) {
            console.log([numMap[(target - nums[i])], i])
            return [numMap[(target - nums[i])], i]
        } else {
            numMap[nums[i]] = i
        }
    }
};