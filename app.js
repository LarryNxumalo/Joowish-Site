const hero = document.querySelector('.hero')
const tl = new TimelineMax();
tl.fromTo(hero,2,{width: "0%"}, {width: "60%"})
