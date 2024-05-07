let userScore = 0;
let compScore = 0;

// access element.

const option = document.querySelectorAll(".opt");
const msg = document.querySelector("#msg-show");

// scorebord access.

const userScoreBoard = document.querySelector("#user-score");
const compScoreBoard = document.querySelector("#comp-score");


// random choice genrate.

const genCompChoice = () => {

    const options = ["rock","paper","scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return options [randIdx]; 
};

// providing condition draw match.

const drawGame = () =>{
   
    msg.innerText = "match was draw.";
    msg.style.backgroundColor = "black";
};

// user win program.

const showWinner = (userWin ,userChoice,compChoice) => {
    if (userWin){

        userScore++;
        userScoreBoard.innerText = userScore;
        msg.innerText = `you win! your ${userChoice } beats ${compChoice}`;
        msg.style.backgroundColor = "green";

    } else {

        compScore++;
        compScoreBoard.innerText = compScore
        msg.innerText = `oh you lost! ${compChoice } beats ${userChoice}`;
        msg.style.backgroundColor = "red";

    }
};
        

        
   

// main program conditions.

const playGame = (userChoice) => {

    // genrate computer choice
    const compChoice = genCompChoice();
  
    

    // conditions

    if( userChoice === compChoice){
        // Draw game
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock"){
            // scissor,paper
            userWin = compChoice === "scissor" ? true : false;
        } else if (userChoice === "paper"){
            // scissor,rock.
            userWin = compChoice === "scissor" ?false : true;
           
        } else{
            // scissor,rock.
            userWin = compChoice === "rock"? true :false;
        }
        showWinner(userWin ,userChoice,compChoice);   
    }

     
};

option.forEach((opt) => {

    opt.addEventListener("click",() =>{
        const userChoice  = opt.getAttribute("id");
        playGame(userChoice); 
    });
    
});