let userScore = 0;
let compScore = 0;

const choices =document.querySelectorAll(".choice");
const msg =document.querySelector("#msg");
const userScorePara =document.querySelector("#user-score");
const CompScorePara =document.querySelector("#comp-score");


const generateComputerChoice =() => {
    const options =["rock","paper","scissors"];
    //rock paper scissors
    const randomindex =Math.floor(Math.random() *3) ;
    return options[randomindex];
}
 const drawGame =() => {
    console.log("Game was draw");
    msg.innerText ="Game Was Draw. Play Again.";
    msg.style.backgroundColor ="#081b31";
 }
 const showWinner =(userWin,userchoice,compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText =userScore;
        msg.innerText =`You Win! Your ${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor ="green";
    } else{
        compScore++;
        CompScorePara.innerText =compScore;
        msg.innerText =`You Lost ${compChoice} beats your ${userchoice}`;
        msg.style.backgroundColor ="red";
    }
 }

const playGame =(userchoice) =>{
    console.log("user choice =" ,userchoice);
    //generate computer choice
    const compChoice = generateComputerChoice();
    console.log("comp choice =" ,compChoice); 

    if(userchoice === compChoice){
        //draw game
        drawGame();

    }
    else{
        let userWin =true;
        if(userchoice === "rock"){
            //scissors,paper
            userWin =compChoice ==="paper" ? false : true;
        }else if(userchoice ==="paper")
        {
            //rock, scissors
            userWin =compChoice ==="scissors" ? false : true;
        }
        else{
            userWin =compChoice ==="rock" ? false : true;
        }
        showWinner(userWin, userchoice,compChoice);
    }

};
choices.forEach((choice) => {
    const userchoice =choice.getAttribute("id")
    choice.addEventListener("click",() =>{
        console.log("choice is entered" ,userchoice);
        playGame(userchoice);
    });

});