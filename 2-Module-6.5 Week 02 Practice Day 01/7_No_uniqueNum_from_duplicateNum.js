
// //ES6
// var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
// const unique=[];
// for(let i=0;i<numbers.length;i++){
//     if(!unique.includes(numbers[i])){
//         unique.push(numbers[i]);
//     }
// }
// console.log(unique);

//or
var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
const uniqueNum= [...new Set(numbers)];
console.log(uniqueNum);