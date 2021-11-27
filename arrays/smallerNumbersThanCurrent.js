var smallerNumbersThanCurrent = function(nums) {
    let result = [];
    let sorted = [...nums].sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {
        result.push(sorted.indexOf(nums[i]));
    }

     return result;
};