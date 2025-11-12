// create Rock Paper Scissors Logic

// function rps(user, computer){
//     if(user === "Rock" && computer === "Scissor") return "user";
//     else if(user = "Scissor" && computer === "Rock") return "computer";
//     else if(user = "paper" && computer === "Rock") return "user";
//     else if(user = "rock" && computer === "paper") return "computer";
//     else if(user = "Scissor" && computer === "Rock") return "computer";
// }

// write a better logic for Rock Paper Scissors

function rps(user, computer){
    if(user === computer) return "draw";
    else if(user === "rock" && computer === "scissor") return "user";
    else if(user === "scissor" && computer === "paper") return "user";
    else if(user === "paper" && computer === "rock") return "user";

    return "computer";
}

console.log(rps(/*User:*/"rock", /*Computer:*/"rock"));
/**/
