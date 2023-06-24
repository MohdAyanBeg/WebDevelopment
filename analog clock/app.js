const hr=document.querySelector('.hrs');
const min=document.querySelector('.mins');
const sec=document.querySelector('.sec');
const msec=document.querySelector('.msec');
const info=document.querySelector('.info');
const day=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const month=['January','Feburary','March','April','May','June','July','August','September','October','November','December'];
setInterval(()=>{
    const now=new Date();
    if(now.getHours()>=12){
        let hrs=now.getHours()-12;
        hr.style.transform=`rotate(${(30*hrs)}deg)`;
        min.style.transform=`rotate(${6*now.getMinutes()}deg)`;
        sec.style.transform=`rotate(${6*now.getSeconds()}deg)`;
        // msec.style.transform=`rotate(${(9/25)*now.getMilliseconds()}deg)`;
        // console.log(hrs)
    }
    else{
        hrs=now.getHours();
        hr.style.transform=`rotate(${(30*hrs)+(now.getMinutes/2)}deg)`;
        min.style.transform=`rotate(${6*now.getMinutes()}deg)`;
        sec.style.transform=`rotate(${6*now.getSeconds()}deg)`;
        console.log(hrs)
    }
    // console.log(info.textContent);
    info.textContent=`${day[now.getDay()]}, ${now.getDate()} ${month[now.getMonth()]} ${now.getFullYear()}`
    

},1000)