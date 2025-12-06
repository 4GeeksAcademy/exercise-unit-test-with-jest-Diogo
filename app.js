let oneEuroIs = {"JPY":156.5,
    "USD":1.07,
    "GPB":0.87,}
const fromEuroToDollar = (euros) => {
    return euros * oneEuroIs.USD;
}
const fromDollarToYen = (dollars) => {
    let euros = dollars / oneEuroIs.USD;
    return euros * oneEuroIs.JPY;
}
const fromYenToPound = (yen) => {
    let euros = yen / oneEuroIs.JPY;
    return euros * oneEuroIs.GBP;
}
module.exports = {fromEuroToDollar, fromDollarToYen, fromYenToPound}