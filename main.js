import anime from './node_modules/animejs/lib/anime.es.js';

const logo = document.querySelector(".logoImage")
const rev = new Audio("./assets/rev.wav")
const rollback = new Audio("./assets/rollback.wav")

logo.addEventListener("mouseover",() => {
    
    anime({
        targets: logo,
        keyframes: [
            {translateX: 0},
            {rotate: 0},
            {rotate: -2},
            {translatex: 30},
            {translateX: 100},
            {translateX: 150},
            {translateX: 240},
            {rotate: 0},
            {translateX: 270},
            {rotate: 2},
            {rotate: 1},
            {rotate: 0},
            {rotate: -1},
            {rotate: 0},
        ],
        //translateX: 270,
        delay: 200,
        duration: 1300,
        easing: 'linear',
      });
      rev.play()
})

logo.addEventListener("mouseout",() => {
    
    anime({
        targets: logo,
        translateX: 0,
        delay: 300,
        duration: 1500,
        easing: 'linear',
      });
      rollback.play()
})