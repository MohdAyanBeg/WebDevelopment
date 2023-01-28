const key='f9fcadd1944d49b78f2142617232801';
const aq="no";
const icon= document.querySelector('.conImg img');

const getWeather =  async (city)=>{
    const ur="http://api.weatherapi.com/v1/current.json";
    const l=`?key=${key}&q=${city}&aqi=${aq}`;
    const lin = await fetch(ur+l);
    const data = await lin.json();
    return data;
}
getWeather("manchester").then(data=>console.log(data))

