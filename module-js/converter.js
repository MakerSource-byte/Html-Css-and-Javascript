function CelciusToFahrenheit(c){
    return Math.round((c * (9/5) + 32) * 10)/10;
}

function FahrenheitToCelcius(f){
    return Math.round(((f-32) * (5/9))*10)/10; 
}

module.exports.CelciusToFahrenheit = CelciusToFahrenheit;
module.exports.FahrenheitToCelcius = FahrenheitToCelcius;