// let arr = [1, 2, 3, 4, 5];
// arr[0] = 59;
// console.log(arr.length);
// let arr = [1, 'two', 3, 'four', 5];
// arr.forEach(function(item, ig, mass){
//     console.log(ig + ': ' + item + '(массив: ' + mass + ")");
// });
// console.log(arr);
// let mass = [1, 6, 9, 4];
// for(let key of mass){
//     console.log(key);
// }
// let ans = prompt("", ""),
//     arr = [];
// arr = ans.split(',');
// console.log(arr);
// let arr = ["skkd", "kksodk", "1d"]
// i = arr.join(', ');
// console.log(arr);
// let arr = [8, 31, 29]
// i = arr.sort(compareNum);
// function compareNum(a,b){
//     return(a-b);
// }
// console.log(arr);
let ans = prompt("", ""),
    arr = [];
arr = ans.split(",");
    arr.forEach(function(item, i, mass){
        arr = arr.sort(compaireNum);
        function compaireNum(a,b){
            return(a-b);
        }
        alert(i + ': ' + item + '(Massiv ' + mass + ')');
        let last = arr[arr.length - 1];
        alert(last);
    });
let anss = prompt("", ""),
    arrr = [];
arr.forEach(function(item, i, mass){
    arr = arr.sort(compireNum);
    function compireNum(a,b){
        return(a-b);
    }
    alert(i + ': ' + item + '(massiv' + mass + ')');

});