const hero = document.querySelector('.hero')
//Animation works with or without the below//
const slider = document.querySelector('.slider')
const logo = document.querySelector('#logo')
const hamburger = document.querySelector('.hamburger')
const headline = document.querySelector('.headline')


const tl = new TimelineMax();


tl.fromTo(hero,3.5,{width: "0%"}, {width: "100%"})
