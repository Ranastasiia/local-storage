'use strict';
let playerName = document.getElementById('playerName')
let name = document.querySelector('#name span')
let start = document.getElementById('start')
let click = document.getElementById('click')
let counter = 0
let clickNum = document.querySelector('#clickNum span')

let getTimer = document.getElementById('timer')
let sec = document.getElementById('sec')
let ms = document.getElementById('ms')

playerName.addEventListener('input', Check)
start.addEventListener('click', Start)
click.addEventListener('click', Click)

function Check (){
    start.disabled = playerName.value === ''
}
function Start(){
    name.textContent = playerName.value
    playerName.value = ''
    let date = new Date(0, 0, 0, 0, 0, 0, 0)
    getTimer = setInterval(function (){
        date.setMilliseconds(date.getMilliseconds()+10)
        sec.textContent = zero(date.getSeconds())
        ms.textContent = zeroms(date.getMilliseconds())
    }, 10)
    click.disabled = false
}

function Click(){
    counter++
    clickNum.textContent = counter
    if (counter===10){
        click.disabled = true
        start.disabled = true
        clearInterval(getTimer)
    }
}

function zero(n){
    return (n<10) ? ('0'+n) : n
}
function zeroms(n){
    return (n<100) ? ('0'+n) : n
}