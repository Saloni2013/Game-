score=0;
cross=true;
document.onkeydown =function(e){
    console.log("Key code is: ", e.keyCode)
    if(e.keyCode == 38){
    dino = document.querySelector('.dino');
    dino.classList.add('animateDino');
    setTimeout(() => {
        dino.classList.remove('animateDino')}, 700);
    }
if(e.keyCode == 39){
    dino = document.querySelector('.dino');
    dinoX=parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dino.style.left=dinoX + 112 +"px";
}
if(e.keyCode == 37){
    dino = document.querySelector('.dino');
    dinoX=parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dino.style.left=(dinoX - 112) +"px";
}
}
setInterval(()=>{
    dino =document.querySelector('.dino');
    gameOver =document.querySelector('.gameOver');
    Obstacle= document.querySelector('.Obstacle');

    dx=parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dy=parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));
    ox=parseInt(window.getComputedStyle(Obstacle, null).getPropertyValue('left'));
    oy=parseInt(window.getComputedStyle(Obstacle, null).getPropertyValue('top'));

    offsetX=Math.abs(dx-ox);
    offsetY=Math.abs(dy-oy);
    console.log(offsetX,offsetY)
    if(offsetX< 113 && offsetY< 52){
        gameOver.style.visibility= 'visible';
        obstacle.classList.remove('ObstacleAni')
    }   
    else if(offsetX < 113 && cross){
        score+=1;
        updateScore(score);
        cross=false;
        setTimeout(()=>{
            cross=true;
        }, 1000);
    }
}, 10);
 function updateScore(score){
    scoreCount.innerHTML ="YOUR SCORE: "+ score
 }