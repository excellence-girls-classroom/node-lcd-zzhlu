function printLcdString(number) {
    var lcd = require('./lcd');

    var characters = lcd.buildCharacters(number);
    var allDigitsLcdStrings = lcd.loadAllDigitsLcdStrings();
    var lcdDigits = lcd.buildLcdDigits(characters, allDigitsLcdStrings);

    var lcdString = lcd.generateLcdString(lcdDigits);
    console.log(lcdString);
}

exports.printLcdString = printLcdString;