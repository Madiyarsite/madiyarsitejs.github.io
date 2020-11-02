// let money = prompt("Ваш бюджет на месяц?", ''),
// 	time = prompt('Введите дату в формате YYYY-MM-DD', '');

// const { PassThrough } = require("stream");

// let appData = {
// 	budget: money,
// 	expenses: {},
// 	optionalExpenses: {},
// 	income: [],
// 	timeData: time,
// 	savings: false
// };

// for(let i = 0; i < 2; i++){
//    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//        b = prompt("Во сколько обойдется?", '');
//        if((typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null 
//        && a != "" && b != "" && a.length < 50)  {
//            console.log('done');
//         appData.expenses[a] = b;   
//        }else{
//         for(let i = 0; i < 2; i++){
//         let a = prompt("Поле не может быть пустой! Ведите заново обязательную статью расходов в этом месяце", ''),
//             b = prompt("Поле не может быть пустой! Ведите заново во сколько обойдется?", '');}
            
//        }
       
// };
// appData.moneyPerDay = appData.budget / 30;
    
// alert("ba"+ appData.budget );
	


// alert(appData.budget / 30);
// let num = 53;
// if(num > 60){
//     console.log("wtf");
// }else if(num < 55){
//     console.log("good");
// }

// (num == 53) ? console.log('no') : console.log('yes');
// switch(num){
//     case num > 49:
//         console.log("good");
//         break;
//     case num < 100:
//         console.log("no");
//         break;
//     case num < 80:
//         console.log("Noo");
//         break;
//     case 50:
//         console.log("goodYes");
//         break;
//     default:
//         console.log("Nepon");
//         break;
// }

// let num = 50;
// do{
//     console.log(num);
//     num++;
// }
// while (num < 55);
// for (let i = 1; i < 8; i++){
//     if (i == 6){
//         continue;
//     }
//     console.log(i);
// }
// function calc(a, b){
//     return(a * b);
// }
let calc = (a,b) => a + b;

console.log(calc(8,5));
console.log(calc(2,1));
function retVar(){
    let num = 50;
    return num;
}
let anotherNum = retVar();
console.log(anotherNum);
let str = "test";
console.log(str.length);
console.log(str.toUpperCase());
let twelve = "12.5px";
// console.log(Math.round(twelve));
console.log(parseInt(twelve));
console.log(parseFloat(twelve));