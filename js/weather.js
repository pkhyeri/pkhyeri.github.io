
const API_KEY = 'cbeb366e3b4e72c507db113a5c38a7c9';
function onGeoOk(position){
    const lat = position.coords.latitude; //위도
    const lon = position.coords.longitude; //경도
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    fetch(url).then(response => response.json())  //javascript로 url을 받아서 then 으로 값을 불러옴
    .then((data) => {
        console.log(data.name, data.weather[0].icon)
        const weather = document.querySelector('#weather span:first-child');
        const temp = document.querySelector('#weather span:nth-child(2)');
        const city = document.querySelector('#weather span:last-child');
        //weather.innerText = data.weather[0].main;
        weather.innerText = `날씨: ${data.weather[0].main}`;
        temp.innerText = `기온: ${data.main.temp}`;
        city.innerText = `위치: ${data.name}`;
    })
    
        
}

function onGeoErr(){
    alert("Can't not you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr)