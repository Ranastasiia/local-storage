'use strict';
let playerName = document.getElementById('playerName')
let name = document.querySelector('#name span')
let start = document.getElementById('start')
let click = document.getElementById('click')
let clear = document.getElementById('clear')
let game = document.querySelector('.game')
let modal = document.querySelector('.modal')
let endGameModal = document.querySelector('.endGameModal')

console.log(localStorage.getItem('arr'))
let date;
let diff

let counter = 0
let clickNum = document.querySelector('#clickNum span')

let getTimer = document.getElementById('timer')
let sec = document.getElementById('sec')
let ms = document.getElementById('ms')

playerName.addEventListener('input', Check)
start.addEventListener('click', Start)
click.addEventListener('click', Click)

clear.addEventListener('click', function () {
    localStorage.clear()
})

function Check (){
    start.disabled = playerName.value === ''
}
function Start(){
    name.textContent = playerName.value
    playerName.value = ''
    date = new Date(0, 0, 0, 0, 0, 0, 0)
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
        let endGame = new Date(0, 0, 0, 0, 0, 0, 0)
        diff = date-endGame
        counter = 0
        click.disabled = true
        start.disabled = true
        clearInterval(getTimer)
        // game.style.display = 'none'
        modal.style.display = 'flex'
        modal.innerHTML = `Name: ${name.textContent}<br>Time: ${sec.textContent}.${ms.textContent}`
        getJson()
        setTimeout(function (){
            modal.style.display = 'none'
            endGameModal.style.display = 'block'
        }, 3000)
    }
}

function zero(n){
    return (n<10) ? ('0'+n) : n
}
function zeroms(n){
    return (n<100) ? ('0'+n) : n
}

function createTable(){

}

function getJson(){
    let array = JSON.parse(localStorage.getItem('arr'))
    array.push(new Object({'name':name.textContent, 'diff':diff, 'time': `${sec.textContent}.${ms.textContent}`}))



    let json = JSON.stringify(array)
    localStorage.setItem('arr', json)
    console.log(localStorage.getItem('arr'))
}
