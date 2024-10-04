
function calculateWindChill(temp, windSpeed, unit) {
    return (unit === "metric" && temp <= 10 && windSpeed > 4.8) || (unit === "imperial" && temp <= 50 && windSpeed > 3) 
        ? unit === "metric"
            ? (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(2)// + " °C"
            : (35.74 + 0.6215 * temp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temp * Math.pow(windSpeed, 0.16)).toFixed(2)// + " °F"
        : "N/A";
}

var windChill= (calculateWindChill(10, 5, "metric"));
document.getElementById("windChill").innerHTML= windChill;

