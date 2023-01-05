let you = 0;
let bot = 0;
let choices = ["Rock", "Paper", "Scissors"];
let outcome;

const footer = document.querySelector(".footer");
const playerScore = document.querySelector(".player");
const botScore = document.querySelector(".bot");
const btnAll = document.querySelectorAll(".btn");
const gameButtons = document.querySelector(".game__buttons");

btnAll.forEach(btn => {
     btn.addEventListener("click", () => {
        renderScore(btn);
      })

   })

function renderScore(btn){
    
    let random = Math.floor(Math.random() * choices.length);
        let botChoice = choices[random];
    
        // for the rock button
        if(btn.classList.contains("btn__rock")){
        if(botChoice === "Rock"){
            outcome = "tied :|";
        }
        else if(botChoice === "Scissors"){
            you++;
            outcome ="win!  :)"
        }
        else{
            bot++;
            outcome = "lose  :(";
        }}
    
        // paper
        if(btn.classList.contains("btn__paper")){
        if(botChoice === "Rock"){
            outcome = "win!  :)"
            ++you;
        }
        else if(botChoice === "Scissors"){
            outcome = "lose  :(";
            ++bot;
        }
        else{
            outcome = "tied :|";
        }}

        // scissors
        if(btn.classList.contains("btn__scissors")){
        if(botChoice === "Rock"){
            outcome = "lose  :(";
            ++bot;
        }
        else if(botChoice === "Scissors"){
            outcome = "tied :|";
        }
        else{
            outcome = "win!  :)"
            ++you;
        }}
        

       playerScore.textContent = you;
        botScore.textContent = bot;
        footer.innerHTML = `<p class="header__desc">You played <span>${btn.textContent}</span>. The bot played <span>${botChoice}</span></p>`;
        footer.innerHTML += `<p class="header__desc"> You <span>${outcome}</span></p>`;
    
        
}

