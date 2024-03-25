async function findInfo(location, start, end){
    let api_link = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/'+location+'/'+start+'/'+end+'?key=BTV9QPSWT2YVEQK6DZ7VJ6AET'
    let response = await fetch(api_link)
    let inJSON = await response.json()
    let daysInfo = inJSON['days']

}

async function userInput(){
    let location = document.getElementById('location').value
    let start = document.getElementById('start-date').value
    let end = document.getElementById('end-date').value
    await findInfo(location,start,end)
}

async function main(){
    await userInput()
}