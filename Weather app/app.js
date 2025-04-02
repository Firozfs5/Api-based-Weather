let inp=document.querySelector("input")
let searchBtn=document.querySelector(".btn")
let begin=document.querySelector(".container")
let body=document.querySelector("body")
let backBtn = document.querySelector(".btnBack");


searchBtn.addEventListener("click",async ()=>{
    
    if(inp.value=="")
        alert("Enter City name later Search");
    else
        begin.classList.toggle("close");

    let getdata=(await getWeather())
    console.log(getdata.data)
    createDiv(getdata.data);


})

async function getWeather(){
   const url=`https://api.weatherapi.com/v1/current.json?key=5c4584b70ab4410d81d131253252503&q=${inp.value}`
   const data=await axios.get(url)
   return data;
}

function createDiv(info){
    
    let mainDiv=document.createElement("div");
    mainDiv.classList.add("disWeather");
    body.append(mainDiv);

    let cityName=document.createElement("h1");
    cityName.innerText=info.location.name;
    mainDiv.append(cityName);

    let temperature=document.createElement("h4")
    temperature.innerText=`Temperature:${info.current.temp_c}°C/${info.current.temp_f}°F`
    mainDiv.append(temperature);

    let condtion=document.createElement("h4");
    condtion.innerText=`Weather condtion:${info.current.condition.text}`
    mainDiv.append(condtion);

    let humidity=document.createElement("h4");
    humidity.innerText=`Humidity : ${info.current.humidity}`
    mainDiv.append(humidity);

    let windDirection=document.createElement("h4");
    windDirection.innerText=`Wind Direction:${info.current.wind_dir}`
    mainDiv.append(windDirection);

    let update=document.createElement("h4");
    update.innerText=`Last Time updated:${info.current.last_updated}`
    mainDiv.append(update)

    let btnBack=document.createElement("button")
    btnBack.classList.add("btnback")
    btnBack.innerText="Back"
    mainDiv.append(btnBack)
    

    btnBack.addEventListener("click",()=>{
        console.log("back");
        mainDiv.remove();
        begin.classList.toggle("close");
        
    })

}


