async function fetchWeatherData(location, start, end) {
    const apiLink = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/${start}/${end}?key=L22WHMCBCWEXC62P6V9FBG6QH`;
    try {
        const response = await fetch(apiLink);
        const data = await response.json();
        return data.days;
    }
    catch (error) {
        alert(error)
    }
}

function updateWeatherTable(daysInfo) {
    const tableBody = document.getElementById('dates-info');
    tableBody.innerHTML = '';
    daysInfo.forEach(day => {
        const row = tableBody.insertRow();
        row.insertCell().textContent = day.datetime;
        row.insertCell().textContent = tempConvert(day.tempmax);
        row.insertCell().textContent = tempConvert(day.tempmin);
        row.insertCell().textContent = day.conditions;
        row.insertCell().textContent = tempConvert(day.feelslike);
    });
}

function tempConvert(fahrenheit) {
    return `${((fahrenheit - 32) * 5 / 9).toFixed(1)}°C`;
}

async function handleFormSubmit(event) {
    event.preventDefault();
    const location = document.getElementById('location').value;
    const start = document.getElementById('start').value;
    const end = document.getElementById('end').value;
    const daysInfo = await fetchWeatherData(location, start, end);
    updateWeatherTable(daysInfo);
    document.getElementById('form').style.display = 'none';
    document.getElementById('output-lines').style.display = 'block';
}

document.getElementById('submit').addEventListener('click', handleFormSubmit);