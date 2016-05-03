function printLcdString(number) {
    var lcd = require('./lcd');

    var lcdDigits = lcd.buildLcdDigits(lcd.buildSplitNumbers(number), lcd.loadAllDigitsLcdStrings());
    var lcdString = lcd.generateLcdString(lcdDigits);
    console.log(lcdString);
}

exports.printLcdString = printLcdString;