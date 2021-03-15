/* *****************Using Set  Logic **************************** */

// let uniqueIntegers = (arr) => {
//     let mySet = new Set(arr);
//     return mySet;
// };
/* ************************Program Using Loops********************** */
let uniqueIntegers = (arr) => {
   
  let ans = [];
    for (i = 0; i < arr.length; i++)
    {
      let j; 
      for (j = 0; j<i; j++){
          if (arr[i] == arr[j]) break;
      };
      if (i == j)
        console.log(arr[i])
}

}

uniqueIntegers([1,1,33,1,1,2,4,7,8,9,12,65,78,6,6,7,8])