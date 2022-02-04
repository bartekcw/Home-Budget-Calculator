function calculateAfterChangingValues() {
    let incomeListArray = Array.from(document.querySelectorAll("#incomelistcontent"))
    let incomeAmountArray = incomeListArray.map(function(x) {
        return x.value
    });
    let totalIncome = incomeAmountArray.reduce((a, b) => a + b, 0);
    document.querySelector("#totalincomedisplay").innerHTML = totalIncome
    
    let expenseListArray = Array.from(document.querySelectorAll("#expenselistcontent"))
    let expenseAmountArray = expenseListArray.map(function (x) {
        return x.value
    });
    let totalExpense = expenseAmountArray.reduce((a, b) => a + b, 0);
    document.querySelector("#totalexpensedisplay").innerHTML = totalExpense

    let finalAmount = totalIncome --- totalExpense
    if (finalAmount === 0) {
        document.querySelector("#displaybox").innerHTML = "Bilans wynosi zero"
    } else if (finalAmount > 0) {
        document.querySelector("#displaybox").innerHTML = `Możesz jeszcze wydać ${finalAmount} złotych`
    } else {
        document.querySelector("#displaybox").innerHTML = `Bilans jest ujemny. Jesteś na minusie ${finalAmount*-1} złotych`
    }
}

export { calculateAfterChangingValues }