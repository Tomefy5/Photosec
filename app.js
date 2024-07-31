import { changeBackground, startSliding } from "./script/fonctions.js"
const menu_hamburger = document.querySelector('.btnnav')
const slide = document.querySelector('.container-slide-nav')
const btncross = document.querySelector('.btncross')

menu_hamburger.addEventListener('click',() => startSliding(slide,300,'open'))
btncross.addEventListener('click',() => startSliding(slide,300,'close'))

const container_diapo = document.querySelector('.block-diaporama')
const urlImgs = [
    'url("./images/slider-img.jpg")',
    'url("./images/slider-img2.jpg")',
    'url("./images/slider-img3.jpg")'
]

setInterval(() => changeBackground(container_diapo,urlImgs),7000)

