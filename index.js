var lightContent = document.getElementById("hidden").style.display = "none";
var activeDarl = document.getElementById("dark1").style.background = "#e0e0d1";

function loadLightTheme() {
    document.getElementById("showed").style.display = "none";
    document.getElementById("hidden").style.display = "block";
    document.getElementById("light1").style.background = "#e0e0d1";
    document.getElementById("dark1").style.background = "none";
    document.getElementById("all1").style.background = "none";
}

function loadDarkTheme() {
    document.getElementById("hidden").style.display = "none";
    document.getElementById("showed").style.display = "block";
    document.getElementById("dark1").style.background = "#e0e0d1";
    document.getElementById("light1").style.background = "none";
    document.getElementById("all1").style.background = "none";
}

function showAllWidget() {
    document.getElementById("showed").style.display = "block";
    document.getElementById("hidden").style.display = "block";
    document.getElementById("light1").style.background = "#e0e0d1";
    document.getElementById("dark1").style.background = "#e0e0d1";
    document.getElementById("all1").style.background = "#e0e0d1";
}