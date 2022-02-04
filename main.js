import { calculateAfterChangingValues } from "./functions.js"

document.addEventListener("DOMContentLoaded", function() {


    let incomeForm = document.querySelector("#incomeform")
    let expenseForm = document.querySelector("#expenseform")    

    incomeForm.addEventListener("submit", event => {

        event.preventDefault()
        
        let incomeList = document.querySelector("#incomelist")
        incomeList.innerHTML += `<li id="incomelistcontent" value="${incomeForm.incomeamount.value}" data-name="${incomeForm.incometext.value}">
            ${incomeForm.incometext.value} - ${incomeForm.incomeamount.value}zł 
            <button class="deletebtn" id="deletebtn"> Usuń </button> 
            <button class="editbtn" id="incomeeditbtn"> Edytuj </button> </li>`
        incomeForm.reset()

        calculateAfterChangingValues();
    })

    expenseForm.addEventListener("submit", event => {
        
        event.preventDefault()

        let expenseList = document.querySelector("#expenselist")
        expenseList.innerHTML += `<li id="expenselistcontent" value="${expenseForm.expenseamount.value}" data-name="${expenseForm.expensetext.value}">
            ${expenseForm.expensetext.value} - ${expenseForm.expenseamount.value}zł
            <button class="deletebtn2" id="deletebtn"> Usuń </button> 
            <button class="editbtn2" id="expenseeditbtn"> Edytuj </button> </li>`
        expenseForm.reset()

        calculateAfterChangingValues();
    })

    document.addEventListener("click", event => {
        if(event.target && event.target.id === "deletebtn"){
            event.preventDefault()
            event.target.parentElement.remove()
            calculateAfterChangingValues()
        } 

        if (event.target && event.target.id === "incomeeditbtn") {
            event.preventDefault()
            let textToBeEdited = event.target.parentElement.dataset.name
            let amountToBeEdited = event.target.parentElement.value
            event.target.parentElement.insertAdjacentHTML("beforebegin", `<form id="editincomelist" class="editformstyle"> 
            <input id="editincometext" class="textstyle" placeholder = "Nazwa przychodu" value="${textToBeEdited}">
            <input id="editincomeamount" class="amountstyle" placeholder = "Kwota" value="${amountToBeEdited}"> 
            <button type="submit" class="btnstyle">Zmień</button> </form>`)
            event.target.parentElement.remove()
        } 

        if (event.target && event.target.id === "expenseeditbtn") {
            event.preventDefault()
            let textToBeEdited = event.target.parentElement.dataset.name
            let amountToBeEdited = event.target.parentElement.value
            event.target.parentElement.insertAdjacentHTML("beforebegin", `<form id="editexpenselist" class="editformstyle"> 
            <input id="editexpensetext" class="textstyle" placeholder = "Nazwa przychodu" value="${textToBeEdited}">
            <input id="editexpenseamount" class="amountstyle" placeholder = "Kwota" value="${amountToBeEdited}"> 
            <button type="submit" class="btnstyle">Zmień</button> </form>`)
            event.target.parentElement.remove()
        } 
   
    });
    document.addEventListener("submit", event => {

        if (event.target && event.target.id === "editincomelist") {
            event.preventDefault()
            event.target.insertAdjacentHTML("beforebegin", `<li id="incomelistcontent" 
            value="${event.target.editincomeamount.value}" data-name="${event.target.editincometext.value}">
            ${event.target.editincometext.value} - ${event.target.editincomeamount.value}zł
            <button class="deletebtn" id="deletebtn"> Usuń </button> 
            <button class="editbtn" id="incomeeditbtn"> Edytuj </button> </li>`)
            event.target.remove()
            calculateAfterChangingValues()
        }

        if (event.target && event.target.id === "editexpenselist") {
            event.preventDefault()
            event.target.insertAdjacentHTML("beforebegin", `<li id="expenselistcontent" 
            value="${event.target.editexpenseamount.value}" data-name="${event.target.editexpensetext.value}">
            ${event.target.editexpensetext.value} - ${event.target.editexpenseamount.value}zł
            <button class="deletebtn2" id="deletebtn"> Usuń </button> 
            <button class="editbtn2" id="expenseeditbtn"> Edytuj </button> </li>`)
            event.target.remove()
            calculateAfterChangingValues()
        }

    });
    
});
