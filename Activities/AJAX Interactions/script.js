// Open Weather Map GET function
function getData() {
    var req = new XMLHttpRequest();
    var url = "http://api.openweathermap.org/data/2.5/weather?";
    var appId = "&appid=2ce9d41a893a6190966ab0042f671f03";
    var zipInput = document.getElementById("zipInput").value;
    var cityInput = document.getElementById("cityInput").value;
    var checkedInput;

    if (zipInput != '') {
        checkedInput = "zip=" + zipInput;
    } else if (cityInput != '') {
        checkedInput = "q=" + cityInput;
    }

    var completeUrl = url + checkedInput + appId + '&units=metric';
    
    req.open("GET", completeUrl, true);

    req.addEventListener('load', function () {
        if (req.status >= 200 && req.status < 400) {
            // Display all weather information
            var response = JSON.parse(req.responseText);
            document.getElementById('city').textContent = response.name;
            document.getElementById('temp').textContent = (response.main.temp).toFixed(2) + " C";
            document.getElementById('pressure').textContent = response.main.pressure + " hPa";
            document.getElementById('humidity').textContent = response.main.humidity + "%";
            document.getElementById('wind').textContent = response.wind.speed + " meters/sec";
            document.getElementById('clouds').textContent = response.clouds.all + "%";
        } else {
            // If failure to load
            document.getElementById("zipInput").value = "Error";
            document.getElementById("cityInput").value = "Error";
        }
    });
    
    req.send(null);
    event.preventDefault();
}

document.getElementById('submitZIP').addEventListener('click', getData);
document.getElementById('submitCity').addEventListener('click', getData);


// HTTP POST function
function postData() {
    var jsonInput = document.getElementById("jsonInput").value;

    var req = new XMLHttpRequest();
    req.open("POST", "http://httpbin.org/post", true);
    req.setRequestHeader('Content-Type', 'application/json');
    
    req.addEventListener('load', function () {
        if (req.status >= 200 && req.status < 400) {
            var response = JSON.parse(req.responseText);
            document.getElementById('postOutput').textContent = response.data;
        } else {
            document.getElementById("jsonInput").value = "Error";
        }
    });
    
    req.send(jsonInput);
    event.preventDefault();
}
document.getElementById('submitPOST').addEventListener('click', postData);