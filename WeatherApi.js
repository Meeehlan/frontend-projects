async function getweather(){
    const city = document.getElementById("city").value;
    const api = "YOUR_API_KEY_HERE";
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=62532c1a33e04c1d62d0a2c942e91b70&units=metric`;
    const response=await fetch(url);
    const data=await response.json();
    if(data.cod==='404'){
        document.getElementById("result").innerHTML="City not found";
        return;
    }
    document.getElementById("result").innerHTML=`
    City🚌:${data.name}<br>
    Temp⛽:${data.main.temp}°C<br>
    Weather:${data.weather[0].description}`;
}
const cube=document.getElementById("cube");
let x=0;
let y=0;
function rotatecube(){
    x+=0.5;
    y+=0.5;
    cube.style.transform=`rotateX(${x}deg)rotateY(${y}deg)`;
    requestAnimationFrame(rotatecube);
}
rotatecube();