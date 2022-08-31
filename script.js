calculate.onclick=function(){

    ////данный блок кода отвечает за удаление старых ячеек таблицы при повторном нажатии на кнопку расчета
    var clearCheldrenInTable=table.children.length
    if(table.children.length>1){
        for(s=clearCheldrenInTable-1;s!=0;--s){
            console.log(s);
            table.removeChild(table.children[s])
        }
    }
    ////конец блока 
    
    let totalАmount=Number(document.querySelectorAll("#inputArea input")[0].value);
    let monthlyReplenishment=Number(document.querySelectorAll("#inputArea input")[1].value);
    let years=Number(document.querySelectorAll("#inputArea input")[2].value);
    let inflation=Number(document.querySelectorAll("#inputArea input")[3].value);
    let profitability=Number(document.querySelectorAll("#inputArea input")[4].value);
    let capitalization=Number(document.querySelectorAll("#inputArea input")[5].value);
    let percents=0;
    let percentsSum=0;
    let tax=0;
    let percentsWithTax=0;
    let taxSum=0;
    let sumInflation=0;
    
    for(i=1, j=1 ;i<(years*12+1); ++i, ++j){
        if(j==(12/capitalization)){
            j=0;
            percents=(totalАmount*((profitability/capitalization)/100))
            tax=percents*0.13
            taxSum+=tax
            percentsWithTax=percents*0.87
            percentsSum+=(percents)
            totalАmount+=percentsWithTax
        }
        if(i%12==0){
            sumInflation+=totalАmount*(inflation/100)
        }
        totalАmount+=monthlyReplenishment;
        table.appendChild(document.createElement("tr"));
        let lastRowInTable=table.children.length-1;
        
        table.children[lastRowInTable].appendChild(document.createElement("td"));
        table.children[lastRowInTable].children[0].innerHTML=i+" Месяц";
        table.children[lastRowInTable].appendChild(document.createElement("td"));
        table.children[lastRowInTable].children[1].innerHTML=totalАmount.toFixed(2);
        table.children[lastRowInTable].appendChild(document.createElement("td"));
        table.children[lastRowInTable].children[2].innerHTML=monthlyReplenishment;
        table.children[lastRowInTable].appendChild(document.createElement("td"));
        table.children[lastRowInTable].children[3].innerHTML=i%(12/capitalization)==0? percents.toFixed(2): 0;
        table.children[lastRowInTable].appendChild(document.createElement("td"));
        table.children[lastRowInTable].children[4].innerHTML=i%(12/capitalization)==0? tax.toFixed(2): 0;
    }
    result.children[0].innerHTML="Первоначальный взнос:"+Number(document.querySelectorAll("#inputArea input")[0].value);
    result.children[1].innerHTML="Сумма всех ежемесячныч пополнений:"+(i-1)*monthlyReplenishment;
    result.children[2].innerHTML="Сумма всех капитализаций по счету:"+percentsSum.toFixed(2);
    result.children[3].innerHTML="Сумма уплаченных налогов:"+taxSum.toFixed(2);
    result.children[4].innerHTML="Итог:"+totalАmount.toFixed(2);
    result.children[5].innerHTML="Через "+years+" лет будет восприниматься как сегодня:"+ (totalАmount-sumInflation).toFixed(2);
}
var canvas=document.getElementById("grafic");
if(canvas.getContext){var grafic2D=canvas.getContext('2d');}

