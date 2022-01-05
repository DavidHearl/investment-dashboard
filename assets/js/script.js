// Total Values
var coreB = 0
var generalB = 0
var dividendB = 0

var coreD = 0
var generalD = 0
var dividendD = 0

// Card Parameters
let totalBalance = document.getElementById("total-balance");
let totalGain = document.getElementById("total-gain");

let coreBalance = document.getElementById("core-balance");
let coreGain = document.getElementById("core-gain");

let generalBalance = document.getElementById("core-balance");
let generalGain = document.getElementById("general-gain");

let dividendBalance = document.getElementById("core-balance");
let dividendGain = document.getElementById("dividend-gain");

// Core
let coreValue = document.getElementsByClassName("core-value");
let coreDifference = document.getElementsByClassName("core-difference");

for (i = 0; i < core.length; i++) {
    coreValue[i].innerHTML = "£" + core[i].value;
    coreDifference[i].innerHTML = "£" + core[i].difference;

    if (core[i].difference < 0) {
        coreDifference[i].style.color = "red";
    } else {
        coreDifference[i].style.color = "green";
    }
    coreB += Number(core[i].value)
    coreD += Number(core[i].difference)
}

coreBalance.innerHTML = "£" + coreB.toFixed(2)
coreGain.innerHTML = "£" + coreD.toFixed(2)

// General
let generalValue = document.getElementsByClassName("general-value");
let generalDifference = document.getElementsByClassName("general-difference");

for (i = 0; i < general.length; i++) {
    generalValue[i].innerHTML = "£" + general[i].value;
    generalDifference[i].innerHTML = "£" + general[i].difference;

    if (general[i].difference < 0) {
        generalDifference[i].style.color = "red";
    } else {
        generalDifference[i].style.color = "green";
    }
    generalB += Number(general[i].value)
    generalD += Number(general[i].difference)
}

generalBalance.innerHTML = "£" + generalB.toFixed(2)
generalGain.innerHTML = "£" + generalD.toFixed(2)

// Dividend
let dividendValue = document.getElementsByClassName("dividend-value");
let dividendDifference = document.getElementsByClassName("dividend-difference");

for (i = 0; i < dividend.length; i++) {
    dividendValue[i].innerHTML = "£" + dividend[i].value;
    dividendDifference[i].innerHTML = "£" + dividend[i].difference;

    if (dividend[i].difference < 0) {
        dividendDifference[i].style.color = "red";
    } else {
        dividendDifference[i].style.color = "green";
    }
    dividendB += Number(dividend[i].value)
    dividendD += Number(dividend[i].difference)
}

dividendBalance.innerHTML = "£" + dividendB.toFixed(2)
dividendGain.innerHTML = "£" + dividendD.toFixed(2)





totalBalance.innerHTML = "£" + (coreB + generalB + dividendB).toFixed(2)
totalGain.innerHTML = "£" + (coreD + generalD + dividendD).toFixed(2)
