var core_balance

let core_value = document.getElementsByClassName("core-value");
let core_difference = document.getElementsByClassName("core-difference");

for (i = 0; i < core.length; i++) {
    core_value[i].innerHTML = "£" + core[i].value;
    core_difference[i].innerHTML = "£" + core[i].gainLoss;

    if (core[i].gainLoss < 0) {
        core_difference[i].style.color = "red";
    } else {
        core_difference[i].style.color = "green";
    }

    parseInt(core_balance) = parseInt(core[i].value)
    console.log(core_balance)
}
