let playagain= document.querySelector(".nextgame")
let playArea = document.querySelector(".play_areas")
let contest= document.querySelector(".contest")
let rulemodel = document.querySelector(".rule-model")
let rulebtn = document.querySelector(".rule-btn")
let rules = document.querySelector(".rules")
let nextbtn = document.querySelector(".next-btn")
let wongame= document.querySelector(".won-game")
let header = document.querySelector(".header")
let replay = document.querySelector(".replay")
let result2 = document.querySelector(".result2")
let nextgamehurraypage = document.querySelector(".nextgamehurraypage")
let rulebtn2 = document.querySelector(".rule-btn2")

let game1= document.querySelector(".game1")
//onclick event for play_areas
 playArea.addEventListener('click',()=>{
    game1.style.display="none"
    contest.style.display ="flex"
 })


//onclick event for playagain btn
playagain.addEventListener('click',()=>{
    contest.style.display ="none";
    game1.style.display= "flex";
})

//copy img as we enter on 1st pagee
const play_areaOptions = {
    "rock": "images/rock.png",
    "scissor": "images/scissor.png",
    "paper": "images/paper.png"
}
 // onclick on rule btn
//  rulebtn.addEventListener('click', () =>{
//     rules.style.display = "block";
//  })

 //onclick on replay button
 replay.addEventListener('click', () =>{
contest.style.display = "none";
game1.style.display = "flex";
 })


 //onclick event for next vtb
 nextbtn.addEventListener('click',()=>{
    nextbtn.style.display= "none";
    wongame.style.display = "flex";
    header.style.display = "none";
    contest.style.display = "none";
    rulebtn.style.display = "none";
    
 })

 //onclick event for next btn on hurray page

 nextgamehurraypage.addEventListener('click', ()=>{
    wongame.style.display = "none";
    header.style.display = "flex";
    game1.style.display = "flex";
 })


const pickuserhand = (play_area) => {

   
 //set the user pick
    document.getElementById("userPickImage").src = play_areaOptions[play_area];
    cpHand = pickComputerHand();
    result(play_area, cpHand);
    

}
const pickComputerHand = () => {
    let play_area = ["rock", "paper", "scissor"]
    let cpHand = play_area[Math.floor(Math.random() * 3)]
    document.getElementById("computerPickImage").src = play_areaOptions[cpHand];
    return cpHand;
}

let SETSCORE = 0;
 let SETCOMSCORE = 0;
const result = (userHand, cpHand) => {
    if (userHand == "paper" && cpHand == "scissor") {
        setDecision("YOU LOST!") 
        setScore(SETCOMSCORE + 1)
        nextbtn.style.display = "none";
        replay.style.display ="none";
        playagain.style.display = "flex";
        result2.style.display = "flex";
        
    }
    if (userHand == "paper" && cpHand == "rock") {
        setDecision("YOU WIN!")
        nextbtn.style.display = "flex";
        result2.style.display = "flex";
        rulebtn.style.display = "flex";
        setScore(SETSCORE + 1)
    }
    if (userHand == "paper" && cpHand == "paper") {
        setDecision("TIE UP!")
        playagain.style.display = "none";
        replay.style.display ="flex";
        result2.style.display = "none";
        nextbtn.style.display = "none";
        
        
        
        }
    if (userHand == "rock" && cpHand == "scissor") {
        setDecision("YOU WIN!")
        nextbtn.style.display = "flex";
        playagain.style.display = "flex";
        replay.style.display ="none";
        result2.style.display = "flex";
        rulebtn.style.display = "flex";
        setScore(SETSCORE + 1)
    }
    if (userHand == "rock" && cpHand == "paper") {
        setDecision("YOU LOST!")
        setComScore(SETCOMSCORE + 1)
        replay.style.display ="none";
        playagain.style.display = "flex";
        result2.style.display = "flex";
        nextbtn.style.display = "none";
    }
    if (userHand == "rock" && cpHand == "rock") {
        setDecision("TIE UP!")
        // playAgainBtn.style.display = "none"
        playagain.style.display = "none";
        replay.style.display ="flex";
        result2.style.display = "none";
        nextbtn.style.display = "none";
       
       
  }

    if (userHand == "scissor" && cpHand == "paper") {
        setDecision("YOU WIN!")
        nextbtn.style.display = "flex";
        result2.style.display = "flex";
        rulebtn.style.display = "flex";
        replay.style.display = "none";
        playagain.style.display = "flex";
       setScore(SETSCORE + 1)
    }
    if (userHand == "scissor" && cpHand == "rock") {
        setDecision("YOU LOST")
       setComScore(SETCOMSCORE + 1)
       replay.style.display ="none";
       playagain.style.display = "flex";
       result2.style.display = "flex";
       nextbtn.style.display = "none";
    }
    if (userHand == "scissor" && cpHand == "scissor") {
        setDecision("TIE UP!")
        playagain.style.display = "none";
        replay.style.display = "flex"
        result2.style.display = "none";
        nextbtn.style.display = "none";
        }
    }

    const setScore = (score) => {
        SETSCORE = score;
        localStorage.setItem("user", SETSCORE);
    
        document.querySelector(".score2 h1").innerText = score;
    }
    const setComScore = (score) => {
        SETCOMSCORE = score;
        localStorage.setItem("computer", SETCOMSCORE);
        document.querySelector(".score1 h1").innerText = score;
    }


    const user = localStorage.getItem("user");
    const computer = localStorage.getItem("computer");

if (user !== null) {
    document.querySelector(".score2 h1").innerText = user; // Update the user's score if it exists in localStorage
}

if (computer !== null) {
    document.querySelector(".score1 h1").innerText = computer; // Update the computer's score if it exists in localStorage
}

const setDecision = (decision) => {
    console.log(decision)
    document.querySelector(".results h1").innerText = decision;
}

// const btnRules = document.querySelector(".rules-btn");
const Rules = document.querySelector(".rules");
rulebtn.addEventListener("click", () => {
  Rules.style.display = "block";
});

//onclick event for close the rules tab
const close = document.querySelector(".close-btn");
close.addEventListener("click", () => {
  Rules.style.display = "none";
});


//onclick event for rules button on hurraypage
rulebtn2.addEventListener('click', () =>{
    rules.style.display = "flex";
});