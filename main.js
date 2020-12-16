import anime from "/animejs/lib/anime.es.js";

const logo = document.querySelector(".logoImage");
const rev = new Audio("./assets/rev.mp3");
const rollback = new Audio("./assets/rollback.mp3");

$(window).on('load',function(){
    $('#newModal').modal('show');
});

logo.addEventListener("mouseover", () => {
    rev.play();
  anime({
    targets: logo,
    keyframes: [
      { translateX: 0 },
      { rotate: 0 },
      { rotate: -2 },
      { translatex: 30 },
      { translateX: 100 },
      { translateX: 150 },
      { translateX: 170 },
      { rotate: 0 },
      { translateX: 200 },
      { rotate: 2 },
      { rotate: 1 },
      { rotate: 0 },
      { rotate: -1 },
      { rotate: 0 },
    ],
    delay: 200,
    duration: 1300,
    easing: "linear",
  });
  
});

logo.addEventListener("mouseout", () => {
  anime({
    targets: logo,
    translateX: 0,
    rotate: 0,
    delay: 300,
    duration: 1500,
    easing: "linear",
  });
  rollback.play();
});
