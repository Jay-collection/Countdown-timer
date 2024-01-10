const newyears='1 Jan 2025';

    const daysEl=document.getElementById('days');
    const hoursEl=document.getElementById('hours');
    const minsEl=document.getElementById('mins');
    const secondsEl=document.getElementById('seconds');
async function countdown(){
    const newyearsDate=new Date(newyears);
    const currentDate=new Date();
    const totalseconds=Math.floor(newyearsDate-currentDate)/1000;
    const day =Math.floor(totalseconds/3600/24);
    const hours=Math.floor(totalseconds/3600)%24;
    const mins=Math.floor(totalseconds/60)%60;
    const seconds=Math.floor(totalseconds)%60;
daysEl.innerHTML=day;
hoursEl.innerHTML=hours;
minsEl.innerHTML=mins;
secondsEl.innerHTML=seconds;

}
countdown();
setInterval( countdown,1000);

    
