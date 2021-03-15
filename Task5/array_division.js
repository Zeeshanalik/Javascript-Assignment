let array_division = (arr) => {
    let result = [0,0];
    for (let i =0; i<arr.length;i++)
    {
        if (i%2)result[1] += arr[i]
        else 
            result[0] +=arr[i];
    }
    return result;
};
console.log(array_division([3,4,6,68,7,6,8,9,7]));