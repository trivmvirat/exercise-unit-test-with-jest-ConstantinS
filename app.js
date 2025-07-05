const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}
const fromDollarToYen = function(valueInDollar){
    
    let valueInYen = (valueInDollar / 1.07) * 156.5;
    return valueInYen;
}

const fromYenToPound = function(valueInYen){
    
    valueInEuro = valueInYen / 156.5;
    valueInPound = valueInEuro * 0.87;
    return valueInPound;
}


module.exports = {fromEuroToDollar, fromDollarToYen, fromYenToPound }
