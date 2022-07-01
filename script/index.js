let li = document.querySelectorAll("ul li");

let circle = document.querySelector(".circle");

let icon = document.querySelectorAll(".icon");

let getWidth = li[0].offsetWidth;

li.forEach((el, index) => {

    el.addEventListener("click", function(ev) {

        ev.preventDefault();

        icon.forEach(r => r.classList.remove("active"));

        icon[index].classList.add("active");

        circle.style.transform = "translateX(" + getWidth * index + "px)";

    })
});


filterSelection("all")

function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("col-md-4");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
}

function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) { element.className += " " + arr2[i]; }
    }
    console.log("add class");
}

function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}


var btnContainer = document.getElementById("sort");
var btns = btnContainer.getElementsByClassName("btn-sort");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName(".active");
        current[0].className = current[0].className.replace(" .active", "");
        this.className += " .active";
    });
}