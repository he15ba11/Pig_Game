/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

const dice = document.querySelector(".dice");
var score0= document.getElementById("score-0");
var score1= document.getElementById("score-1");
const roll = document.querySelector(".btn-roll");
const hold = document.querySelector(".btn-hold");
var name0= document.getElementById("name-0");
var name1= document.getElementById("name-1");
var player0Panel = document.querySelector('.player-0-panel');
var player1Panel = document.querySelector('.player-1-panel');
var current0= document.getElementById("current-0");
var current1= document.getElementById("current-1");
var img= document.querySelector("img");
let counter = 0;
let c0 = 0;
let c1 = 0;


function newGame(){
        img.src ="dice-1.png";
        counter=0;
        c0 = 0;
        c1 = 0;

        score0.innerHTML =0 ;   score1.innerHTML=0;  current0.innerHTML=0;  current1.innerHTML=0;
        player1Panel.classList.remove('active');
        player0Panel.classList.add('active');
        player0Panel.classList.remove('winner');
        player1Panel.classList.remove('winner');
        name0.textContent = 'Player 1';
        name1.textContent = 'Player 2';
        roll.disabled=false;
        hold.disabled=false;

}


function rollDice(){

    let roll = Math.floor(Math.random() * 6) + 1;
    return roll;
}
    function rollimg(n){
    var image= document.querySelector("img").setAttribute("src","dice-" + n + ".png");
    img.innerHTML=image;
}

roll.addEventListener("click", () => {
    let rnum = rollDice();
    counter += rnum;
    dice.style.display = "block";
    rollimg(rnum);
    if (rnum !== 1) {
      if (player0Panel.classList.contains("active")) {
        current0.textContent = counter;
      } else {
        current1.textContent = counter;
      }
    } else {
      counter = 0;
      current0.textContent = 0;
      current1.textContent = 0;
      player0Panel.classList.toggle("active");
      player1Panel .classList.toggle("active");
    }
  });
  
  hold.addEventListener("click", () => {
    if (player0Panel.classList.contains("active")) {
      c0 += counter;
      score0.textContent = c0;
      current0.textContent = 0;
      if (c0 >= 100) {
        name0.innerHTML="Winner!";
        roll.disabled=true;
        hold.disabled=true;
        return;
      }

    } else {
      c1 += counter;
      score1.textContent = c1;
      current1.textContent = 0;
      if (c1 >= 100) {
        name1.innerHTML="Winner!";
        roll.disabled=true;
        hold.disabled=true;
        return;
      }
    }
    counter = 0;
    player0Panel.classList.toggle("active");
    player1Panel.classList.toggle("active");
  });

  // Heba ElSayed