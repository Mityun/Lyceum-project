var btn = document.getElementById("theme-button");
var appDiv = document.getElementById("app");

btn.addEventListener("click",  ChangeTheme);

function ChangeTheme()
{
    console.log(123)
    appDiv.classList.toggle("dark-theme");
    appDiv.classList.toggle("light-theme");
}