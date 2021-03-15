let longestString = (arr) => {
let max_string = arr[0].length;
let ans = arr[0];
    for (let i=1;i<arr.length;i++){
        let maxi = arr[i].length;
        if (maxi > max_string)
        {
            ans = arr[i];
            max_string= maxi;
        }
    }
    return ans;

};
console.log(longestString(['Zee', 'Zeesh', 'Zeeshan', ' Zeeeshaaan']));
