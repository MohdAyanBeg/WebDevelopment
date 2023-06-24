const hrscreen=document.querySelector('.hrs');
const minscreen=document.querySelector('.mins');
const secscreen=document.querySelector('.secs');
const dayscreen=document.querySelector('.day');
const datescreen=document.querySelector('.date');
const monthscreen=document.querySelector('.month');
const yearscreen=document.querySelector('.year');
const choose=document.querySelector('form')
const day=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const month=['January','Feburary','March','April','May','June','July','August','September','October','November','December'];
const clock=document.querySelector('.clock');
const clockLabel=document.querySelector('.clocklabel');

// console.log(now.getDay(),now.getDate(),now.getMonth(),now.getFullYear())

// console.log(now)

time();
function time(){
    const now=new Date();
    let ampm;
    // console.log(now)
    if(choose.convert[1].checked){
        hrscreen.textContent=now.getHours();
        clock.lastElementChild.classList.add('dn');
        clockLabel.lastElementChild.classList.add('dn');
        Array.from(clock.children).forEach(e => {
            e.classList.remove('c4');
            console.log(e.classList)
        })
        Array.from(clockLabel.children).forEach(e => {
            e.classList.remove('c4');
            console.log(e.classList)
        })

    }
    else{
        clock.lastElementChild.classList.remove('dn');
        clockLabel.lastElementChild.classList.remove('dn');
        Array.from(clock.children).forEach(e => {
            e.classList.add('c4');
            console.log(e.classList)
        })
        Array.from(clockLabel.children).forEach(e => {
            e.classList.add('c4');
            console.log(e.classList)
        })
        if(now.getHours()>=12 && now.getHour<24){
            ampm="PM";
            hrscreen.textContent=now.getHours()-12;
        }
        else{
            ampm="AM";
        }
        clock.lastElementChild.textContent=`${ampm}`;
        
    }
    
    minscreen.textContent=now.getMinutes();
    secscreen.textContent=now.getSeconds();
    dayscreen.textContent=day[now.getDay()]+",";
    datescreen.textContent=now.getDate();
    monthscreen.textContent=month[now.getMonth()];
    yearscreen.textContent=now.getFullYear()

}

setInterval(time, 1000);

 