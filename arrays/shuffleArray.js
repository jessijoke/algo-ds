var shuffle = function(nums, n) {
    let res = []
    for(let i = 0; i < n; i++){
        res.push(nums[i], nums[i+n])
        console.log(res)
    }
    return res
};