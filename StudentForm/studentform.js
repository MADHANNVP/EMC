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
navscr.addEventListener("click",function(){
    navbartwo.classList.remove("hidden")
})
function resetForm() {
    document.getElementById("myForm").reset(); // clears all input fields
}
var first_name=document.querySelector(".first--name")
var last_name=document.querySelector(".last--name")
var date=document.querySelector(".date")
var save__btn=document.querySelector(".save--div")
var student__table=document.querySelector(".student--table")
save__btn.addEventListener("click",function(){
    console.log(first_name.value)
var tr1=document.createElement("tr")
var td1=document.createElement("td")
var td2=document.createElement("td")
var td3=document.createElement("td")
var td4=document.createElement("td")
var td5=document.createElement("td")
var td6=document.createElement("td")
var td7=document.createElement("td")
var td8=document.createElement("td")
var td9=document.createElement("td")
var td10=document.createElement("td")
var td11=document.createElement("td")
var td12=document.createElement("td")
td1.textContent=first_name.value
td2.textContent=last_name.value
td3.textContent=date.value
tr1.appendChild(td1)
tr1.appendChild(td2)
tr1.appendChild(td3)
student__table.append(tr1)
})