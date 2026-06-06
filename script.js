let gameSeq = [];
let userSeq = [];

let level = 0;
let started = false;

let colors = ["box-1","box-2","box-3","box-4"];

let h2 = document.querySelector(".details");

document.addEventListener("mousedown",function(){
    if(started==false){
        started=true;
        console.log("Game Started!!");
        levelUp();
       let score = document.querySelector(".score");
       score.innerHTML="";
    }

    
})

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
    btn.classList.remove("flash");
    },500);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
    btn.classList.remove("userflash");
    },500);
}


function levelUp(){
    level++;
    h2.innerHTML=`LEVEL ${level}`;
    userSeq=[];
    let randIdx = Math.floor(Math.random()*3);
    let randBox = colors[randIdx];
    let randColor = document.querySelector(`.${randBox}`);
    gameSeq.push(randBox);
    gameFlash(randColor);
}


function btnPress(){
    let btn = this;
    userFlash(btn);
    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".box");

for(btn of allBtns){
    btn.addEventListener("click",btnPress)
}

function checkAns(index){

    if(userSeq[index]==gameSeq[index]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp(),1000); 
        }
        
    }else{
        h2.innerHTML="Wrong Guess!, Press any where to Start again";
        let score = document.createElement("h2");
        score.innerHTML=`SCORE : ${level} Points`;
        document.querySelector(".score").appendChild(score);
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){document.querySelector("body").style.backgroundColor="black";},130);
        reset();
    }
}


function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}


