var navscr = document.querySelector(".navbar--scroll")
var btn1 = document.querySelector(".navbar--btn")
var body = document.querySelector(".container")
var body1 = document.querySelector(".navbar--heading")
var navbar1=document.querySelector(".navbar--2--scroll")
var navbar2=document.querySelector(".student--information")
var std=document.querySelector(".navbar--scroll")
var stdin=document.querySelector(".student--information")
btn1.addEventListener("click", function () {
    navscr.classList.add("show")
})
body.addEventListener("click", function () {
    navscr.classList.remove("show")
})
body1.addEventListener("click", function () {
    navscr.classList.remove("show")
})
std.addEventListener("click",function(){
     stdin.classList.add("hidden")
})
var navscr1=document.querySelector(".navbar--2--scroll")
var btn2=document.querySelector(".navbar--2--btn")
var navbartwo=document.querySelector(".student--details")
var body3=document.querySelector(".navbar--2--heading")
btn2.addEventListener("click",function(){
    navscr1.classList.add("view")
})
body3.addEventListener("click", function () {
    navscr1.classList.remove("view")
})
navbar1.addEventListener("click",function(){
    navbar2.classList.remove("hidden")
})
navbar1.addEventListener("click",function(){
    navbartwo.classList.add("hidden")
})