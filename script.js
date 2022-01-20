var billAmount = document.querySelector("#bill-amount");
var cashGiven = document.querySelector("#cash-given");
var checkButton = document.querySelector("#check-button");
var message = document.querySelector("#error-message");
var noOfNotes = document.querySelectorAll(".no-of-notes");


var availableNotes = [2000, 500, 100,50, 20, 10, 5, 1];


checkButton.addEventListener("click", function validateBillAndCashAmount() {

    var amountToReturn = parseInt(cashGiven.value - billAmount.value);

    if (parseInt(billAmount.value) <= 0) {
        message.style.display = "block";
        message.innerHTML = "Thora aur ganit par leejye aap"
        console.log(billAmount.value);
    } 

    else if(cashGiven.value < 0)
    {
        message.style.display = "block";
        message.innerHTML = "Bhai saabh aapko muje paise dene hai muje aap ko nahi dene apna hishab sahi keejye"
    }

    else if (amountToReturn < 0) {
        message.style.display = "block";
        message.innerHTML = "Gandu aadmi " + -1*amountToReturn + " ruppe aur dae nahi tho plate saaf karva vuun ga"
    } 

    else {
        message.style.display = "none";
        calculateChange(amountToReturn);
    }
});

function calculateChange(amountToReturn) {
    for (let i = 0; i < availableNotes.length; i++) {
        let notes = Math.trunc((amountToReturn / availableNotes[i]));
        amountToReturn -= notes * availableNotes[i];
        noOfNotes[i].innerText = notes;
    }
}