var maxSubArray = function(nums) {
    let currentSum = 0;
    let maxSum = nums[0];
    nums.forEach((num) => {
        currentSum = Math.max(num, currentSum + num)
        maxSum = Math.max(maxSum, currentSum)
    })
    return maxSum
};