'use strict';
let money, time;
function start(){
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
    
    while(isNaN(money) || money == "" || money == null){
        money = +prompt(" Неверно! Ведите заново ваш бюджет на месяц?", '');
    }
}
start();
let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
    savings: true,
    chooseExpenses: function(){
        for(let i = 0; i < 2; i++){
            let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
                b = prompt("Во сколько обойдется?", '');
                if((typeof(a)) === 'string' && (typeof(a)) != null && 
                (typeof(b)) != null && a != "" && b != "" && a.length < 50 ) {
                    console.log('done');
                    appData.expenses[a] = b;   
                } else {
                    i--;
                }
                
         }
    },
    detectDayBudget: function(){
        appData.dayMoneyBudget = (appData.budget / 30).toFixed;
            alert(Math.round(+appData.dayMoneyBudget));
    },
    checkSavings: function(){
        if(appData.savings == true){
            let save = +prompt("vash deposit"),
                time = +prompt("vash time");
            appData.monthIncome = save/100/12*time;
            alert(appData.monthIncome);
            
        }
    },
    chooseOptExpenses: function(){
        for (let i = 1; i <= 3; i++) {
            let questionOptExpenses = prompt("Статья необязательных расходов?");
            appData.optionalExpenses[i] = questionOptExpenses;
            console.log(appData.optionalExpenses);
        }
    },
    chooseIncome: function(){
        
            let items = prompt("chta prinosit dop dohod? (cherez ,)", "");
            if((typeof(items)) != 'string' && (typeof(items)) == null && items == ""){
                alert("Qate");
            }else{
               appData.income = items.split(', ');
            appData.income.sort();
            appData.income.push(prompt("whats more")); 
            }
        
        appData.income.forEach(function(itemm, i){
            alert('Способ доп заработка=' + (i+1) + "-" + itemm);
       
     });
   
}
};
 for(let key in appData){
        console.log("our programma : " + key + '-' + appData[key]);
    } 
// function chooseExpenses(){
    

// }
// chooseExpenses();

// alert(appData.budget / 30);
// appData.moneyPerDay = (appData.budget / 30).toFixed();
// function checkSavings() {
//     if (appData.savings == true) {
//         let save = +prompt("какова сумма накоплений?"),
//             percent = +prompt("pod kakoi procebt");

//         appData.monthIncome = save/100/12*percent;
//         alert('Ваш доход в месяц: ' +Math.round(+ appData.monthIncome));
//     }
// }
// checkSavings();

    
// alert("ba"+ appData.budget );
	


