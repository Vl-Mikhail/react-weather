export default function(iconCode) {
    let map = {
        '01d': 'weather-sunny', // clear sky
        '02d': 'weather-partlycloudy', // few clouds
        '03d': 'weather-cloudy', // scattered clouds
        '04d': 'weather-fog', // broken clouds
        '09d': 'weather-rainy', // shower rain
        '10d': 'weather-pouring', // rain
        '11d': 'weather-lightning', // thunderstorm
        '13d': 'weather-snowy', // snow
        '50d': 'weather-fog', // mist
        '01n': 'weather-night', // night cleat sky ....
        '02n': 'weather-partlycloudy',
        '03n': 'weather-cloudy',
        '04n': 'weather-fog',
        '09n': 'weather-rainy',
        '10n': 'weather-pouring',
        '11n': 'weather-lightning',
        '13n': 'weather-snowy',
        '50n': 'weather-fog'
    };

    return map[iconCode] || 'refresh';
}