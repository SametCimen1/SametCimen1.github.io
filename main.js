var days = document.querySelector(".dayText");
var hours = document.querySelector(".hourText");
var minutes = document.querySelector(".MinuteText");
var seconds = document.querySelector(".secondText");



var release = new Date(2021, 5,27);
var today = new Date();
var milSeconds = Math.abs((release.getTime()-today.getTime()))
let  diffSeconds =Math.floor(milSeconds/1000);
let  diffMinutes =Math.floor(diffSeconds/60);
let  diffHours =Math.floor(diffSeconds/3600);
let  diffDays =Math.floor(diffHours/24);
const upDateTime = () =>{
  today = new Date();
  milSeconds = Math.abs((release.getTime()-today.getTime()))
  diffSeconds =Math.floor(milSeconds/1000);
  diffMinutes =Math.floor(diffSeconds/60);
  diffHours =Math.floor(diffSeconds/3600);
  diffDays =Math.floor(diffHours/24);
 days.textContent = diffDays;
 hours.textContent = diffHours%24;
 minutes.textContent = diffMinutes%60;
 seconds.textContent = diffSeconds%60;
}
function update(){
  
  setInterval(upDateTime,1000);
}

update();

function createBubble(){

  const area = document.querySelector(".bouble");
    const createElem = document.createElement('span');
    createElem.style.width = "1px";
    createElem.style.height = "1px";
    
    createElem.style.left = Math.random() * (window.innerWidth-20) +"px";
   
    area.appendChild(createElem);
    console.log()
    setTimeout(()=>{
      createElem.remove();
    }, 10000)
  }
   
setInterval(createBubble,200)
