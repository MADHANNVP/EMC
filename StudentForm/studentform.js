var navscr = document.querySelector(".navbar--scroll")
var btn1 = document.querySelector(".navbar--btn")
var body = document.querySelector(".container")
var body1 = document.querySelector(".navbar--heading")
btn1.addEventListener("click", function () {
    navscr.classList.add("show")
})
body.addEventListener("click", function () {
    navscr.classList.remove("show")
})
body1.addEventListener("click", function () {
    navscr.classList.remove("show")
})
