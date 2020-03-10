class Forecast{
    constructor(){
        console.log(this)
        this.key='Lcl09K5edO5YKHdyouXBhbxzTeTLqOnx';
        this.weatherUrl='http://dataservice.accuweather.com/currentconditions/v1/';
        this.cityUrl='http://dataservice.accuweather.com/locations/v1/cities/search';
    }
    async updateCity(city){
        console.log(this);
        const cityDetails=await this.getCity(city);
        const weather=await this.getWeather(cityDetails.Key);
        return {cityDetails, weather};               //object short hand notation
        }
    async getCity(city){
        const query=`?apikey=${this.key}&q=${city}`;
        const response=await fetch(this.cityUrl+query);
        const data=await response.json();
        return data[0];
    }
    async getWeather(id){
        const query=`${id}?apikey=${this.key}`;
        const response=await fetch(this.weatherUrl + query);
        const data=await response.json();
        return data[0];
        }

    
}



//get weatther information

// const getWeather=async(id)=>{

// const base='http://dataservice.accuweather.com/currentconditions/v1/'
// const query=`${id}?apikey=${key}`;
// const response=await fetch(base + query);

// const data=await response.json();
// return data[0];
// }
// //get city information

// const getCity=async (city)=>{
//     const base='http://dataservice.accuweather.com/locations/v1/cities/search';
//     const query=`?apikey=${key}&q=${city}`;

//     const response=await fetch(base+query);
//     const data=await response.json();
//     return data[0];
// };

// getCity('manchester')
//     .then(data=>{
//     return getWeather(data.Key);
//     }).then(data=>{
//     console.log(data);
//     })
//     .catch(err=>console.log(err));
