var realtyincome = document.getElementsByClassName("realty-income");
realtyincome[0].innerHTML = core[0].value

var vanguard = document.getElementsByClassName("vanguard");
vanguard[0].innerHTML = core[1].name

var apple = document.getElementsByClassName("apple");
apple[0].innerHTML = core[2].value

data = document.getElementsByClassName("data")

for (i = 0; i < data.length; i++) {

    if (data[i] < 0) {
        data[i].style.color = "red";
    } else {
        data[i].style.color = "green";
    }

}

//document.getElementById("core-balence").innerHTML



