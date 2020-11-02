"use strict";

let money, time;
function start(){
        money = +prompt('vash budget za mesats?');
        time = +prompt('vash vrema');
    while(isNaN(money) || money == "" || money == null ){
        money = +prompt('vash budget za mesats?');
    }    
}
start();
let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: true
};
function chooseExpenses(){
for(let i = 0; i < 2; i++){
    let a = prompt("Сіздің міндетті төлеміңіз?");
    let b = prompt("Сіздің депозитіңіз?");
    if((typeof(a)) === 'string' &&
     (typeof(a)) != null && 
     (typeof(b)) != null && a != "" && b != "" && a.length < 50 ){
         console.log('done');
         appData.expenses[a] = b;
     } else{
         i--;
     }

    }
}
chooseExpenses();
alert(appData.budget / 30);
appData.moneyPerDay = (appData.budget / 30).toFixed;
function checkSavings(){
    if(appData.savings == true){
        let save = +prompt("vash deposit"),
            time = +prompt("vash time");
        appData.monthIncome = save/100/12*time;
        alert(appData.monthIncome);
        
    }
}
checkSavings();
function detectDayBudget(){
    for(let i = 1; i < 2; i++){
        let coin = prompt("Ваш дневной бюджет?"),
            day = prompt("Ваш время?");
        if((typeof(coin)) == 'string' && 
        (typeof(day)) == 'string' && coin != "" && day != ""){
            appData.dayMoneyBudget = coin/100/24*day;
            alert(Math.round(+appData.dayMoneyBudget));
        }
        
        
    }
}
detectDayBudget();
function learnJS(lang,  callbakc){
    console.log("i learn " + lang);
    callbakc();
}
function done(){
    console.log("i learn 3th lang");
}
learnJS("Javascript", done);
let options = {
    width: 1024,
    height: 1010,
    display: "block",
    top: 45
};
console.log(options.display);
    options.bool =  false;
    options.colors = {
        bg: "red",
        border: "block"
    };
    console.log(options);
    delete options.bool;
    console.log(options);
    for(let mad in options){
        console.log("svoistvo " + mad + " imeet znachenie " + options[mad]);
    }
    console.log(Object.keys(options.colors).length);
    let arr = [1, 2, 3, 4, 5];
    arr[0] = 59;
    console.log(arr.length);
    let arr = [1, 'two', 3, 'four', 5];
    arr.forEach(function(item, ig, mass){
        console.log(ig + ': ' + item + '(массив: ' + mass + ")");
    });
    console.log(arr);
    let mass = [1, 6, 9, 4];
    for(let key of mass){
        console.log(key);
    }
    let ans = prompt("", ""),
        arr = [];
arr = ans.split(',');
console.log(arr);