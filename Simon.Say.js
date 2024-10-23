let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let Level = 0;
// h3.innerText = "";

let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");

document.addEventListener("keypress",function(){//when can click anywhere on document page 
    if(started == false){
        started = true;   //game started one time only
        console.log("game Started!");
        h3.innerText = "";
        
        levelUp();
    }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 250);
};

function userflash(btn){
    btn.classList.add("userflash");//to make white bg color
    setTimeout(function() {
        btn.classList.remove("userflash");
    }, 250);
};

function levelUp(){
    userSeq = [];//reset...that's why we have to press buttons all the times after the level increase
    Level++;//level increase
    h2.innerText = `Level ${Level}`;//connect with press

    let ranIdx = Math.floor(Math.random() * 3);//make random no(0-3)
    let ranColor = btns[ranIdx];
    let ranbtn = document.querySelector(`.${ranColor}`);

    gameSeq.push(ranColor);

    console.log(gameSeq);
    //console.log(ranbtn);

    btnFlash(ranbtn);
};

function checkAns(idx){
    //let idx = Level - 1;

    if(userSeq[idx] == gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML = `GAME OVER! Your Score was <b>${Level}.</b><br>Press any key to start!`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        h3.innerText = `Your Highest Score was ${Level}`;
        reset();
    };
    //console.log(`current level ${Level}`);
};

function btnPress(){
    //console.log(this);
    let btn = this;
    userflash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
};

let allbtns = document.querySelectorAll(".btn");
for(let btn of allbtns){//we have to press any one button only not all so we apply fuctions here
    btn.addEventListener("click", btnPress);
};

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    Level = 0;
    // h3.innerText = "";
};



