let gameseq = [];
let userseq = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;
let highscore = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
     if (started == false) {
          console.log("game is started");
          started = true;

          levelUp();
     }
});

function gameFlash(btn) {
     btn.classList.add("flash");
     setTimeout(function () {
          btn.classList.remove("flash")
     }, 250);
}

function userFlash(btn) {
     btn.classList.add("userflash");
     setTimeout(function () {
          btn.classList.remove("userflash")
     }, 250);
}

function levelUp() {
     userseq = [];
     level++;
     h2.innerText = `Level ${level}`;


     let randIdx = Math.floor(Math.random() * 4);
     let randColor = btns[randIdx];
     let ransBtn = document.querySelector(`.${randColor}`);
     gameseq.push(randColor);
     console.log(gameseq);
     gameFlash(ransBtn);
}

function checkAns(idx) {
     if (userseq[idx] === gameseq[idx]) {
          if (userseq.length == gameseq.length) {
               setTimeout(levelUp, 1000);
          }
     } else {
          updateHighScore();
          h2.innerHTML = `Game over! Your score was <b>${level}</b><br>high score is ${highscore} <br> Press any key to start.`;
          document.querySelector("body").style.backgroundColor = "red"
          setTimeout(function () {
               document.querySelector("body").style.backgroundColor = "white"
          }, 150)
          resett();
     }
}

function btnPress() {
     let btn = this;
     userFlash(btn);

     userColor = btn.getAttribute("id");
     userseq.push(userColor);

     checkAns(userseq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
     btn.addEventListener("click", btnPress)
}

function updateHighScore() {
     if (level > highscore) {
          highscore = level;
     }
}


function resett() {
     started = false;
     gameseq = [];
     userseq = [];
     level = 0;

}