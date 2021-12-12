function integerIntersect(arr1, arr2) {
    let result = []
    let map1 = {}
    
    for (let i = 0; i < arr1.length; i++) {
        if(map1[arr1[i]]) {
            map1[arr1[i]] = map1[arr1[i]] + 1
        } else {
            map1[arr1[i]] = 1
        }
    }

    for (let j = 0; j < arr2.length; j++) {
        if (map1[arr2[j]] &&map1[arr2[j]] > 0) {
            result.push(arr2[j])
            map1[arr2[j]] = map1[arr2[j]] - 1
        }
    }

    return result
}