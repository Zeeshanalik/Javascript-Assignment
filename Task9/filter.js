let result =[];
let ans = [];
let arr = ['lahore', 'faislabad', 'karachi']
const cities = ['lahore','faislabad', 'rawalpindi','peshawar','multan','karachi'];

/***********************Using iteration Method***************************************** */

//     for (let i = 0; i<arr.length; i++)
//     {
//         for (let j = 0; j<cities.length; j++)
//         {
//             if (arr[i]=== cities[j]) 
//             {
//                 cities[j] = '-';

//             }
//         }
//     }   
// //console.log(cities);
   
//    let filtered = cities.filter(item => item !== '-');
//    console.log(filtered)
/*************************Usinf Filter and Include Method****************************** */
const filteresCities = cities.filter((city) => !arr.includes(city));
console.log(filteresCities);