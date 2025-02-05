const num = [
    'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
    'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
];
const tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

function number2words(n) {
    if (n < 20) return num[n];
    let digit = n % 10;
    if (n < 100) return tens[~~(n / 10) - 2] + (digit ? " " + num[digit] : "");
    if (n < 1000) return num[~~(n / 100)] + " hundred" + (n % 100 === 0 ? "" : " " + number2words(n % 100));
    return number2words(~~(n / 1000)) + " thousand" + (n % 1000 !== 0 ? " " + number2words(n % 1000) : "");
}

module.exports = function toReadable(number) {
    return number2words(number);
}
