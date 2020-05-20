var getRed = document.querySelector("#myrangered")
var demo1 = document.querySelector("#demo1")
getRed.addEventListener("input", function () {
  demo1.value = getRed.value
})

var redV = getRed.value


var getGreen = document.querySelector("#myrangegreen")
var demo2 = document.querySelector("#demo2")

getGreen.addEventListener("input", function () {
  demo2.value = getGreen.value
})

var greenV = getGreen.value

var getBlue = document.querySelector("#myrangeblue")
var demo3 = document.querySelector("#demo3")
getBlue.addEventListener("input", function () {
  demo3.value = getBlue.value
})

var blueV = getBlue.value



//fazer uma função que pega os valores de cada input
//lembrando que background-color rgb(redv, greenv, bluev)

var square = document.querySelector(".square")
square.classList.add("square")
square.style.backgroundColor = 'rgb(' + redV + ',' + greenV + ',' + blueV + ')'