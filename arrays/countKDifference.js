var countKDifference = function(nums, k) {
    let result = 0
    let lp = 0
    let rp = 1
    while ( lp < nums.length-1 ) {
        if (rp < nums.length) {
            //console.log(nums[lp], nums[rp])
            if (Math.abs(nums[lp] - nums[rp]) === k) {
                result++
            }
            rp ++
        } else {
            lp++
            rp = lp + 1
        }
    }
    return result
};