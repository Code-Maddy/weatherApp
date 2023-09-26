let search = document.querySelector("#search");
let searchBtn = document.querySelector("#search-btn");
let weatherData = document.querySelector("#weatherData");
const apiKey = "074e3cf34f29d282a0d174bf7f90581b";
searchBtn.addEventListener("click", weatherDetails);
search.addEventListener("keyup", weatherDetails);
function weatherDetails() {
    if (search.value.trim() === "") {
        alert("Please enter city name ");
    }
    else {
        // search.value = search.value.split(" ").join();
        let city = search.value;
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        let dataInfo = fetch(url);
        dataInfo.then(
            (response) => {
                console.log(response.status);
                return response.json();
            }
        ).then(
            (data) => {
                console.log(data);
                weatherData.innerHTML = `
                <div id="info">
                <div id="location"><h3>${data.name},${data.sys.country}</h3></div>
                <div id="temp">${data.main.temp}°C</div>
                <div id="other-info">
                <div id="feels_temp"><p>Feels Like</p><p>${data.main.feels_like}°C</p></div>
                <div id="humidity"><p>Humidity</p><p>${data.main.humidity}%</p></div>
                <div id="pressure"><p>Pressure</p><p>${data.main.pressure}mbar</p></div>
                </div>
                </div>
                `

            }
        ).catch((error) => {
            console.log(error);
            weatherData.innerHTML = `<div id="error">Location Not Found</div>`
        })



    }
}