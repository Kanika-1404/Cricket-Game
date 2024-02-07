var computerChoice='';
var userChoice= '';
var resultmsg;

function StoreData(score){
    let str= JSON.stringify(score);
    localStorage.setItem('Score',JSON.stringify(score));
}

var score= JSON.parse(localStorage.getItem('Score')) ??  {
    win: 0,
    lose: 0,
    tie: 0,
};

StoreData(score);

function printScore(){
    let msg=`Win: ${score.win} Lose: ${score.lose} Tie: ${score.tie}`;
    return msg;
}

function GenerateCompChoice(){
    let randomNum=Math.random()*3;
    if (randomNum>0 && randomNum<=1){
        computerChoice='Bat';
    }
    else if (randomNum>1 && randomNum<=2){
        computerChoice='Ball';
    }
    else{
        computerChoice='Stump';
    }
}

function compareChoice(){
    if (userChoice==='Bat'){
        if (computerChoice==='Bat'){
            resultmsg='It is a tie....';
            score.tie++;
        }
        else if (computerChoice==='Ball'){
            resultmsg='User won.....';
            score.win++;
        }
        else{
            resultmsg='Computer won.....';
            score.lose++;
        }
    }
    else if (userChoice==='Ball'){
        if (computerChoice==='Bat'){
            resultmsg='Computer won.....';
            score.lose++;
        }
        else if (computerChoice==='Ball'){
            resultmsg='It is a tie....';     
            score.tie++;       
        }
        else{
            resultmsg='User won.....';  
            score.win++;
        }
    }
    else if (userChoice==='Stump'){
        if (computerChoice='Bat'){
            resultmsg='User won.....';
            score.win++;            
        }
        else if (computerChoice='Ball'){
            resultmsg='Computer won.....';
            score.lose++;
        }
        else{
            resultmsg='It is a tie....';     
            score.tie++;       
        }
    }
    StoreData(score);
}

function printResult(){
    document.querySelector('#userCh').innerText=`${userChoice}`;
    document.querySelector('#compCh').innerText=`${computerChoice}`;
    document.querySelector('#resultStat').innerText=`${resultmsg} \n ${printScore()}`;
}

function printResetResult(){
    document.querySelector('#userCh').innerText=``;
    document.querySelector('#compCh').innerText=``;
    document.querySelector('#resultStat').innerText=` ${printScore()}`;
}

document.querySelector('#userCh').innerText=`${userChoice}`;
document.querySelector('#compCh').innerText=`${computerChoice}`;
