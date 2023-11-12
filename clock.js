let hour= document.getElementById("hour");
let min= document.getElementById("min");
let sec= document.getElementById("sec");

function displayClock(){
let date= new Date();
let hh= date.getHours();
let mm=date.getMinutes();
let ss=date.getSeconds();

let hRotate=30*hh + mm/2;
let mRotate= 6*mm;
let sRotate=6*ss;
hour.style.transform=`rotate(${hRotate}deg)`;
min.style.transform=`rotate(${mRotate}deg)`;
sec.style.transform=`rotate(${sRotate}deg)`;
}
setInterval(displayClock,1000)
//digital clock
let hours=document.getElementById("hours");
let minites= document.getElementById("minites");
let seconds=document.getElementById("seconds");
let ampm=document.getElementById("ampm");
function digital(){
    let date= new Date();
let h= date.getHours();
let m=date.getMinutes();
let s=date.getSeconds();
let am =h>=12? "PM":"AM";
//convert 24hrs to 12 hours
if(h>12){
    h=h-12;
}
h=(h<10)? "0"+h:h;
m=(m<10)? "0"+m:m;
s=(s<10)? "0"+s:s;
hours.innerHTML=h;
minites.innerHTML=m;
seconds.innerHTML=s;
ampm.innerHTML=am;
}
setInterval(digital,1000)