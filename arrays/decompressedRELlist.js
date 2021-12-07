var decompressRLElist = function(nums) {
    const res = [];
    for (let i = 0; i < nums.length; i += 2) {
        for (let j = 1; j <= nums[i]; j++) {
            res.push(nums[i + 1])
        }
    }
    return res;
};