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
    document.getElementById("myForm").reset(); 
}
var first_name=document.querySelector(".first--name")
var last_name=document.querySelector(".last--name")
var date=document.querySelector(".date")
var age=document.querySelector(".age")
var email=document.querySelector(".email")
var save__btn=document.querySelector(".save--div")
var student__table=document.querySelector(".student--table")
var city=document.querySelector(".city")
var country=document.querySelector(".country")
var street__address=document.querySelector(".street--address")
var zip__code=document.querySelector(".zip--code")
save__btn.addEventListener("click",function(){
var tr1=document.createElement("tr")
var td1=document.createElement("td")
var td2=document.createElement("td")
var td3=document.createElement("td")
var td4=document.createElement("td")
var td5=document.createElement("td")
// var td6=document.createElement("td")
var td7=document.createElement("td")
var td8=document.createElement("td")
var td9=document.createElement("td")
var td10=document.createElement("td")
var td11=document.createElement("td")
var td12=document.createElement("td")
td1.textContent=first_name.value
td2.textContent=last_name.value
td3.textContent=date.value
td4.textContent=age.value
td5.textContent=email.value
var selectBox = document.querySelector(".sec");
// console.log("Selected course:", selectBox.value);
td7.textContent=selectBox.value;
td8.textContent=city.value
td9.textContent=country.value
td10.textContent=street__address.value
td11.textContent=zip__code.value
td12.innerHTML="<button onclick="+"remover(event)"+">Delete</button>"
// const radios = document.querySelectorAll('input[name="he"]');
// radios.forEach((radio) => {
    //   radio.addEventListener('change', (event) => {
        //     if (event.target.checked) {
            //       console.log("You selected:", event.target.value);
            //       td6.textContent=event.target.value
            //       tr1.appendChild(td6)
            //       console.log("You selected:", td6);
            //     }
            // });
            // });
            
            tr1.appendChild(td1)
            tr1.appendChild(td2)
            tr1.appendChild(td3)
            tr1.appendChild(td4)
            tr1.appendChild(td5)
            tr1.appendChild(td7);
            tr1.appendChild(td8)            
            tr1.appendChild(td9)            
            tr1.appendChild(td10)            
            tr1.appendChild(td11)            
            tr1.appendChild(td12)            
            // .addEventListener("change", () => {
            // });
            student__table.append(tr1)
        })
        function remover(event){
            event.target.parentElement.parentElement.remove()
            // console.log()
        }