let endpointWeather = 'get_weather';
let endpointCities = 'api/cities';

$(document).ready(function () {
    if(window.location.href.includes('forecast')){
    $.getJSON(endpointWeather)
        .done(function (weatherData) {
            console.log(weatherData);
            let tableBody = document.getElementById('tableBody');

            (async() => {
                let response = await fetch(endpointCities);
                let data = await response.json();
                console.log(data);

                weatherData.forEach((element, index) => {
                    tableBody.innerHTML += `
                    <tr>
                      <th>${data[indexParser(index)]}</th>
                      <td>${dateParser(element.date)}</td>
                      <td>${element.summary}</td>
                      <td>${element.temperatureC}</td>
                      <td>${element.temperatureF}</td>
                    </tr>
                    `
                });
            })()

            
        });
    }
    // Other code ...
});
function refreshWeather(){
    let tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = '';
    $.getJSON(endpointWeather)
    .done(function (weatherData) {
        console.log(weatherData);
        let tableBody = document.getElementById('tableBody');
        (async() => {
            let response = await fetch(endpointCities);
            let data = await response.json();
            console.log(data);

            weatherData.forEach((element, index) => {
                tableBody.innerHTML += `
                <tr>
                  <th>${data[indexParser(index)]}</th>
                  <td>${dateParser(element.date)}</td>
                  <td>${element.summary}</td>
                  <td>${element.temperatureC}</td>
                  <td>${element.temperatureF}</td>
                </tr>
                `
            });
        })()
    });
}
function dateParser(date){
    let dateYear = date.substring(0, 4);
    let dateMonth = date.substring(5, 7);
    let dateDay = date.substring(8, 10);
    let revDate = `${dateDay}/${dateMonth}/${dateYear}`;
    return revDate;
}
function indexParser(index){
    if(index === 0){
        return 'firstCity'
    } else if (index === 1){
        return 'secondCity'
    } else if (index === 2){
        return 'thirdCity'
    } else if (index === 3){
        return 'forthCity'
    } else {
        return 'fifthCity'
    }
}