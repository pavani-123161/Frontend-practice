
const  MIN = 1;
const MAX = 100;
let answer = Math.floor(Math.random()*(MAX-MIN+1)) + MIN;
const checkBtn = document.getElementById("check-btn");
const restartBtn = document.getElementById("restart-btn");
const container = document.querySelector(".container");
const historyList = document.getElementById("history-list");
const message = document.getElementById("message");
const attemptsDisplay = document.getElementById("attempts");
const bestScoreDisplay = document.getElementById("best-score");
const guessInput = document.getElementById("guess");

let guess;
let attempts = 0;
let bestscore = Number(localStorage.getItem("bestScore")) || 0;
bestScoreDisplay.textContent = bestscore;
let running = true;

guessInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        checkBtn.click();
    }
});
function addHistory(guess, result, className) {
    const historyItem = document.createElement("li");
    historyItem.textContent = `${guess} → ${result}`;
    historyItem.classList.add(className);
    historyList.append(historyItem);
    if (historyList.children.length > 10) {
        historyList.removeChild(historyList.firstElementChild);
    }
}
checkBtn.onclick = function(){
    if(!running){
        return;
    }
    guess = guessInput.value;
    if(guess === ""){
        message.textContent = "Please enter a number!";
        message.className = "error";
        return;
    }
    guess = Number(guess);
    if(guess<MIN || guess>MAX){
        message.textContent = `Please enter a number between ${MIN} and ${MAX}`;
        message.className = "error";
        return;
    }
    attempts++;
    attemptsDisplay.textContent = attempts;
    if(guess<answer){
        message.textContent = "Too Low";
        message.className = "low";
        addHistory(guess, "Too Low","low");
    }else if(guess>answer){
        message.textContent = "Too High";
        message.className = "high";
        addHistory(guess, "Too High","high");
    }else{
        message.textContent = `🎉 You are Correct! The number was ${answer}.`;
        message.className = "correct";
        guessInput.value = answer;
        guessInput.disabled = true;
        if(bestscore === 0 || attempts<bestscore){
        bestscore = attempts;
        bestScoreDisplay.textContent = bestscore;
        localStorage.setItem("bestScore",bestscore);
    }
     running = false;
     checkBtn.disabled = true;
     container.classList.add("winner");
     addHistory(guess, "🎉 You are Correct!","correct");
    }
};
restartBtn.onclick = function(){
    answer = Math.floor(Math.random()*(MAX-MIN+1)) + MIN;
    attempts = 0;
    attemptsDisplay.textContent = attempts;
    message.textContent = "Start guessing...";
    guessInput.value = "";
    message.className = "";
    running = true;
    checkBtn.disabled = false;
    container.classList.remove("winner");
    historyList.innerHTML = "";
    guessInput.disabled = false;
    guessInput.focus();
}