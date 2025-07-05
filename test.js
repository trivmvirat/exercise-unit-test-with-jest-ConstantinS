// Importar la función sum del archivo app.js
const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

test("Un euro deberían de ser 1.07dolares", function () {
    expect(fromEuroToDollar(1)).toBe(1.07);
});

test("Un dolar debe de ser 146.26 yenes", function () {
    expect(fromDollarToYen(1)).toBeCloseTo(146.26);
});

test("1 yen es 0.0056 libras", function () {
    expect(fromYenToPound(1)).toBeCloseTo(0.0056);
});
