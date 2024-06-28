
let count = 0;
let highscore = 0;
function addCount() {
    count++;
    document.getElementById('count').innerHTML=count;
    console.log('Der div wurde angeklickt')
}

function reset() {
    setHighscore();
    count= 0;
    document.getElementById('count').innerHTML=count;
}

function setHighscore() { 
    if (count > highscore)
    highscore = count;
    document.getElementById('highscore').innerHTML = highscore
}