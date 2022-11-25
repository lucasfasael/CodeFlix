var dark = document.getElementById("darktheme");

dark.addEventListener("click", function(){
    var conte = document.querySelector("body");

    conte.style.backgroundColor = "rgb(10, 10, 85)";
});
var light = document.getElementById("lighttheme");

light.addEventListener("click", function(){
    var conte = document.querySelector("body");
    conte.style.backgroundColor = "cyan";
});
