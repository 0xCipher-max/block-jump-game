var character = document.getElementById("character");
var obstacle = document.getElementById("obstacle");
var counter=0;
function jump(){
    if(character.classList == "animation"){return}
    character.classList.add("animation");
    setTimeout(function(){
        character.classList.remove("animation");
    },300);
}
var checkDead = setInterval(function() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>-20 && characterTop>=130){
        obstacle.style.animation = "none";
        alert("Game Over. score: "+Math.floor(counter/100));
        counter=0;
        obstacle.style.animation = "obstacle 1s infinite linear";
    }else{
        counter++;
        document.getElementById("scoreCard").innerHTML = Math.floor(counter/100);
    }
}, 10);