async function findInfo(location, start, end) {
    let api_link = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/' + location + '/' + start + '/' + end + '?key=L22WHMCBCWEXC62P6V9FBG6QH'
    let response = await fetch(api_link)
    let inJSON = await response.json()
    let daysInfo = inJSON['days']

    let tableBody = document.getElementById('dates-info');
    tableBody.innerHTML = ''; // Clear previous data

    for (let i = 0; i < daysInfo.length; i++) {
        let row = tableBody.insertRow();
        let dateCell = row.insertCell();
        let maxTempCell = row.insertCell();
        let minTempCell = row.insertCell();
        let conditionsCell = row.insertCell();
        let feelsLikeCell = row.insertCell();

        dateCell.textContent = daysInfo[i]['datetime'];
        maxTempCell.textContent = tempConvert(daysInfo[i]['tempmax']);
        minTempCell.textContent = tempConvert(daysInfo[i]['tempmin']);
        conditionsCell.textContent = daysInfo[i]['conditions'];
        feelsLikeCell.textContent = tempConvert(daysInfo[i]['feelslike']);
    }

    document.getElementById('input-lines').style.display = 'none';
    document.getElementById('output-lines').style.display = 'block';
}

function tempConvert(tFahrenheit) {
    return (((tFahrenheit - 32) * (5 / 9)).toFixed(1)) + '°C';
}

async function userInput() {
    let location = document.getElementById('location').value;
    let start = document.getElementById('start-date').value;
    let end = document.getElementById('end-date').value;
    await findInfo(location, start, end);
}

async function main() {
    await userInput();
}

document.getElementById('submit').addEventListener('click', main);

document.getElementById('refresh').addEventListener('click', function () {
    location.reload();
});
