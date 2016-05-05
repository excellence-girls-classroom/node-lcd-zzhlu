var lcd = require('./lcd');

function printLcdString(number) {

    var splitNumbers = lcd.buildSplitNumbers(number);
    var allDigitsLcdStrings = lcd.loadAllDigitsLcdStrings();
    var lcdDigits = lcd.buildLcdDigits(splitNumbers, allDigitsLcdStrings);
    var lcdString = lcd.generateLcdString(lcdDigits);

    console.log(lcdString);
}

exports.printLcdString = printLcdString;