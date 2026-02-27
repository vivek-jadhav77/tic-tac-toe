let boxes=document.querySelectorAll(".box"); //acess all boxes to do task 
let resetBtn=document.querySelector("#reset-btn");
let newGameBtn =document.querySelector("#new-btn");
let msgContainer =document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 =true;//playerX, playerO.

const winPatterns=[  // eight winning patterns
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame=() =>{
    turn0=true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

// add eventlistener to all boxes to do some work
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        
        // once box is clicked this action below will perform:
        if(turn0===true){
            box.innerText="O";
            turn0=false;
        }else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true; // there was loophole we were able to changethe value even after clicking once to avoind this disabled used.

        checkWinner();
    })
});

const disableBoxes =() =>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enableBoxes =()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const ShowWinner = (winner) =>{
    msg.innerText =`congratulations , Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner=()=>{
    for(let pattern of winPatterns) {
        console.log(
            boxes[pattern[0]].innerText , 
            boxes[pattern[1]].innerText , 
            boxes[pattern[2]].innerText
        );

        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val= boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                
                ShowWinner(pos1Val); // to show winner message.
            }
        }
    }
};

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
