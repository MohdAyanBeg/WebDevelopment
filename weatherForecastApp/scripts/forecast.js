const key='f9fcadd1944d49b78f2142617232801';
const key2='7df75634a60a31b9a2b1e24d4c9d3080';
const aq="no";
const icon= document.querySelector('.conImg img');

const getWeather =  async (city)=>{
    const ur="http://api.weatherapi.com/v1/current.json";
    const l=`?key=${key}&q=${city}&aqi=${aq}`;
    const lin = await fetch(ur+l);
    const data = await lin.json();
    return data;
}

// const openweather = async(city)=>{
//     const u1="http://api.openweathermap.org/geo/1.0/direct"
//     const u2= `?q=${city}&appid=${key2}`;

//     const link= await fetch(u1+u2);
//     const data2=await link.json();
//     const lat= data2[0].lat;
//     const lon= data2[0].lon;
//     const il1="https://api.openweathermap.org/data/2.5/weather";
//     const il2=`?lat=${lat}&lon=${lon}&appid=${key2}units=metric`;
//     const info =await fetch(il1+il2);
//     const wdata= await info.json();
//     return wdata;
// }
