calculate.onclick=function(){
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
    
    for(i=1, j=1 ;i<(years*12+1); ++i, ++j){
        
        if(j==(12/capitalization)){
            j=0;
            percents=(totalАmount*((profitability/capitalization)/100))
            tax+=percents*0.13
            percentsWithTax=percents*0.87
            percentsSum+=percents
            totalАmount+=percents
        }
        totalАmount+=monthlyReplenishment;
    }
    result.children[0].innerHTML="Первоначальный взнос:"+Number(document.querySelectorAll("#inputArea input")[0].value);
    result.children[1].innerHTML="Сумма всех ежемесячныч пополнений:"+(i-1)*monthlyReplenishment;
    result.children[2].innerHTML="Сумма всех капитализаций по счету:"+percentsSum.toFixed(2);
    result.children[3].innerHTML="Сумма уплаченных налогов:"+tax.toFixed(2);
    result.children[4].innerHTML="Итог:"+totalАmount.toFixed(2)
}