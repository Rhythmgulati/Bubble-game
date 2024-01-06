window.onload = function() {
   document.querySelector(".music").play();
}

document.querySelector(".mutebtn").addEventListener("click",()=>{
  var audio = document.querySelector(".music");
  audio.muted = !audio.muted;
});


var cluster = "";
function generator(){
var num = 207;
for(var i=1;i<=num;i++){
    var number = Math.floor(Math.random()*10);
    cluster +=  `<div class="circle">${number}</div>`
}
document.querySelector(".framebottom").innerHTML=cluster;
}

var time=30;
function timer(){
var interval = setInterval(()=>{
     if(time>0){
     time--;
     document.querySelector(".timerbox").textContent=time;
     }
     else{ 
        clearInterval(interval);
        document.querySelector(".framebottom").innerHTML=`<div class="final"><h1>Game Over</h1><br><h2>Your score is ${score}</h2></div>`
     }
},1000)
};
var hitrn;
function getnewhit(){
   hitrn = Math.floor(Math.random()*10);
   document.querySelector(".hitbox").textContent= hitrn;
}

var score=0;
function increasescore(){
   score += 10;
   document.querySelector(".scorebox").textContent=score;
}

getnewhit();
document.querySelector(".framebottom").addEventListener("click",function(details){
 var hitnumber = Number(details.target.textContent);
 if(hitnumber===hitrn){
   getnewhit();
   increasescore();
   cluster="";
   
   generator();
 }
 else{

 }
})

generator();
timer();
