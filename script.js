let btn1 = document.querySelector("#btn1")
let btn2 = document.querySelector("#btn2")
let btn3 = document.querySelector("#btn3")
let btn4 = document.querySelector("#btn4")
let btn5 = document.querySelector("#btn5")
let btn6 = document.querySelector("#btn6")
let btn7 = document.querySelector("#btn7")
// title
let title = document.querySelector(".heading")
// main div
let mainDiv=document.querySelector(".main-div")

//click
btn1.addEventListener('click', function () {
    mainDiv.style.background="red"
    mainDiv.style.color="black"
    title.innerHTML = "My Name is Shamim Hosen.I'm a Backend Developer";
}) 
// 2
btn2.addEventListener('click', function () {
    mainDiv.style.background="blue"
    mainDiv.style.color="white"
    title.innerHTML = "My Name is Arman Hossin Srabon.I'm a Web Designer";
}) 
// 3
btn3.addEventListener('click', function () {
    mainDiv.style.background="green"
    mainDiv.style.color="black"
    title.innerHTML = "My Name is Diponkor Roy.I'm a AI Developer";
}) 
// 4
btn4.addEventListener('click', function () {
    mainDiv.style.background="pink"
    mainDiv.style.color="black"
    title.innerHTML = "My Name is Momin Hosen.I'm a Full-Stack Developer";
}) 
// 5
btn5.addEventListener('click', function () {
    mainDiv.style.background="purple"
    mainDiv.style.color="black"
    title.innerHTML = "My Name is Akash Hossain.I'm a Backend Developer";
}) 
// 6
btn6.addEventListener('click', function () {
    mainDiv.style.background="orange"
    mainDiv.style.color="white"
    title.innerHTML = "My Name is Bipul Roy.I'm a React Developer";
}) 
/7
btn7.addEventListener('click', function () {
    mainDiv.style.background="navy"
    mainDiv.style.color="white"
    title.innerHTML = "My Name is Sojib Khan.I'm a Full-Stack Developer";
}) 
