async function findInfo(location, start, end) {
    let api_link = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/' + location + '/' + start + '/' + end + '?key=BTV9QPSWT2YVEQK6DZ7VJ6AET'
    let response = await fetch(api_link)
    let inJSON = await response.json()
    let daysInfo = inJSON['days']
    document.getElementById('input-lines').style.display = 'none'
    document.getElementById('output-lines').style.display = 'block'
    let outputUL = document.getElementById('dates-info')
    for (let i = 0; i < daysInfo.length; i++) {
        let dateUL = document.createElement('ul')

        let li1 = document.createElement('li')
        let tempMax = daysInfo[i]['tempmax']
        li1.innerHTML = tempMax;
        dateUL.append(li1)

        let li2 = document.createElement('li')
        let tempMin = daysInfo[i]['tempmin']
        li2.innerHTML = tempMin
        dateUL.append(li2)

        let li3 = document.createElement('li')
        let cond = daysInfo[i]['conditions']
        li3.innerHTML = cond
        dateUL.append(li3)

        let li4 = document.createElement('li')
        let feelsLike = daysInfo[i]['feelslike']
        li4.innerHTML = feelsLike
        dateUL.append(li4)

        let div = document.createElement('div')
        div.classList.add('sep-20')
        dateUL.append(div)
        
        outputUL.append(dateUL)
    }

}

async function userInput() {
    let location = document.getElementById('location').value
    let start = document.getElementById('start-date').value
    let end = document.getElementById('end-date').value
    await findInfo(location, start, end)
}

async function main() {
    await userInput()
}