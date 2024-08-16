const form= document.querySelector('form');
const info=document.querySelector('.container2');
const conImg=document.querySelector('.conImg img');
const dnImg=document.querySelector('.dnImg img');
const disp=document.querySelector('.info');



// function updateUI(data) {
//     info.innerHTML=
//     `<div class="cityName"><h2>${data.name}</h2></div>
//     <div class="condition">${data.weather[0].description}</div>
//     <div class="temp">
//         <h2>TEMPERATURE</h2>
//         <div class="tempValue">${data.main.temp}&#176;C</div>
//     </div>`

//     conImg.setAttribute("src","/img/openWeather/"+`${data.weather[0].icon}`+".png")

//     if(data.weather[0].icon[2]=="d"){dnImg.setAttribute("src","/weatherForecastApp/img/dayTime.jfif")}
//     else{dnImg.setAttribute("src","/weatherForecastApp/img/nightTime.jfif")}

// }
function updateUI(data) {
    info.innerHTML=
    `<div class="cityName"><h2>${data.location.name}</h2></div>
    <div class="condition">${data.current.condition.text}</div>
    <div class="temp">
        <h2>TEMPERATURE</h2>
        <div class="tempValue">${data.current.temp_c}&#176;C</div>
    </div>`

    conImg.setAttribute("src","https:"+`${data.current.condition.icon}`)

    if(data.current.is_day){dnImg.setAttribute("src","/weatherForecastApp/img/dayTime.jfif")}
    else{dnImg.setAttribute("src","/weatherForecastApp/img/nightTime.jfif")}

}


const updateCity =async (cityName) => {
    console.log(cityName);
    const weather= await getWeather(cityName)
    return weather;
}
// const updateCity =async (cityName) => {
//     console.log(cityName);
//     const weather= await openweather(cityName)
//     return weather;
// }





const cityN=form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const cityName=form.city.value.trim();
    form.reset();
    if(disp.classList.contains('dn')){disp.classList.remove('dn')}
    updateCity(cityName)
    .then(data=> updateUI(data))
    .catch(err=> console.log(err,"sorry couldn't fetch the data"))
})
