const cityForm=document.querySelector('form');
const card=document.querySelector(".card");
const details=document.querySelector(".details");
const time=document.querySelector('.time');
const icon=document.querySelector('.icon img');

let forecast=new Forecast();


const updateUI=(data)=>{

    // console.log(data);
    // const cityDetails=data.cityDetails;
    // const weather=data.weather;
    //destructure properties
    const{cityDetails,weather}=data;
    //update details template
    details.innerHTML=`
                <h5 class="my-3">${cityDetails.EnglishName}</h5>
                <div class="my-3">${weather.WeatherText}</div>
                <div class="display-4 my-4">
                <span>${weather.Temperature.Metric.Value}</span>
                <span>&deg;c</span>`;
    card.classList.remove('d-none');
    //update/night/day &icon images
    const iconSrc=`img/icons/${weather.WeatherIcon}.svg`
    icon.setAttribute('src',iconSrc);
    //ternary operator
    let timeSrc=weather.IsDayTime?'img/day.svg':'img/night.svg';
    // if(weather.IsDayTime){
    //     timeSrc='img/day.svg';
    // }
    // else{
    //     timeSrc='img/night.svg';
    // }
    time.setAttribute('src',timeSrc);
}

//Getting city=step 1
cityForm.addEventListener('submit',(e)=>{
e.preventDefault();
//get city value
const city=cityForm.city.value.trim();
//update ui with new city
forecast.updateCity(city)
.then(data=>{
    console.log(data)
    updateUI(data)})
.catch((err)=>console.log(err));
localStorage.setItem('city',city);
});


if(true){
    forecast.updateCity(localStorage.getItem('city'))
    .then(data=>updateUI(data))
    .catch(err=>console.log(err));
}