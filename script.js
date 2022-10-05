'use strict';
const score1 = document.getElementById("score1");
const current1 = document.getElementById("current1");
const score2 = document.getElementById("score2");
const current2 = document.getElementById("current2");
const newGame = document.getElementById("newGame");
const rollDice = document.getElementById("rollDice");
const hold = document.getElementById("hold");
const img = document.getElementById("img");
var jouerCurrent="j1";

hold.addEventListener('click', () => {
  if(jouerCurrent=="j1")
  {
    score1.textContent= Number(score1.textContent)+Number(current1.textContent);
    current1.textContent="0";
    jouerCurrent="j2";
  }
  else{
    score2.textContent= Number(score2.textContent)+Number(current2.textContent);
    current2.textContent="0";
    jouerCurrent="j1";
  }

})
rollDice.addEventListener('click', () => {
   
    
  var val=Math.floor(Math.random()*6)+1;
  img.src = "dice-" + val + ".png";
  if(jouerCurrent=="j1")
  {
    if(val==1)
    {
      current1.textContent="0";
      jouerCurrent="j2";
    }
    else
    {
      current1.textContent=Number(current1.textContent)+val;
    }

  }else
  {
    if(val==1)
    {
      current2.textContent="0";
      jouerCurrent="j1";
    }
    else
    {
      current2.textContent=Number(current2.textContent)+val;
    }
  }
  

    })
    newGame.addEventListener('click', () => {
      current1.textContent="0";
      current2.textContent="0";
      score1.textContent="0";
      score2.textContent="0";
      jouerCurrent="j1";
      })

    
      