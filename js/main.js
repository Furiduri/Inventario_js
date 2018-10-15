function collapse_show() {
    var btMenu = document.getElementById("btMenu");
    var Menu = document.getElementById("navbarColor");
    if (Menu.className == "navbar-collapse collapse") {
        Menu.className = "navbar-collapse collapse show";
    } else {
        Menu.className = "navbar-collapse collapse";
    }
};