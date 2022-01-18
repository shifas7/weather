function fetchWeather(){
    let cityName=city.value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=6fa99e1f96f024f79970c5a3532b2ac6`).
    then(res=>{
        if(res.ok){
            return res.json()
        }
        else{
            throw new Error("failed to fetch")
        }
    }).then(data=>displayValues(data)).catch(err=>console.log(err.message))
}

function displayValues(data){
    var html_data=``
    let locationName=data.name
    let temp=data.main.temp
    let weathertype=data.weather[0].main
    let mintemp=data.main.temp_min
    let maxtemp=data.main.temp_max
    let windspeed=data.wind.speed
    let humidity=data.main.humidity

    html_data+=`
    <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${locationName}</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">temperature:${temp}</li>
    <li class="list-group-item">weather Type:${weathertype}</li>
    <li class="list-group-item">minimum temperature:${mintemp}</li>
    <li class="list-group-item">Maximum temperature:${maxtemp}</li>
    <li class="list-group-item">wind speed:${windspeed}</li>
    <li class="list-group-item">Humidity:${humidity}</li>



  </ul>
</div>`
document.querySelector("#result").innerHTML=html_data
}