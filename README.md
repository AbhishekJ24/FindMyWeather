# FindMyWeather

FindMyWeather is a web application that allows users to find weather details for a specific location and date range.

## Features

- Input fields for location, start date, and end date.
- Displays weather details for the selected location and date range.

## Technologies Used

- HTML5
- CSS3
- JavaScript (Fetch API for API calls)

## How to Use

1. Clone the repository to your local machine:

```bash
git clone https://github.com/your-username/FindMyWeather.git
```

2. Open the index.html file in your web browser or host it on a web server.
3. Enter the location, start date, and end date in the input fields provided.
4. Click on the "DISPLAY DETAILS" button to view weather information for the specified location and date range.

## API Integration

This project integrates with the Visual Crossing Weather API to retrieve weather details based on user input. You will need to obtain an API key from Visual Crossing Weather and replace 'YOUR_API_KEY' in the script.js file with your actual API key.

```
let api_link = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/[LOCATION]/[START-DATE]/[END-DATE]?key=[YOUR_API_KEY]';
```

## Author

- Abhishek Joshi
