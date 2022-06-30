module.exports = function toReadable(number) {
    let numTxt = String(number).split("");
    const upToTwenty = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];

    const decimal = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    if (number < 20) {
        return upToTwenty[number];
    }
    if (number < 100) {
        if (number % 10 < 1) {
            return decimal[Math.floor(number / 10)];
        } else {
            return `${decimal[Math.floor(number / 10)]} ${
                upToTwenty[number % 10]
            }`;
        }
    }
    if (number >= 100) {
        if (number % 100 === 0) {
            return `${upToTwenty[number / 100]} hundred`;
        } else if (number % 100 < 20) {
            return `${upToTwenty[Math.floor(number / 100)]} hundred ${
                upToTwenty[number % 100]
            }`;
        } else if ((number % 100) % 10 === 0) {
            return `${upToTwenty[Math.floor(number / 100)]} hundred ${
                decimal[(number % 100) / 10]
            }`;
        } else {
            return `${upToTwenty[Math.floor(number / 100)]} hundred ${
                decimal[Math.floor((number % 100) / 10)]
            } ${upToTwenty[(number % 100) % 10]}`;
        }
    }
};
