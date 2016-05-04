function buildSplitNumbers(number) {

    return number.toString().split('');
}

function buildLcdDigits(splitNumbers, allDigitsLcdStrings) {

    var lcdDigits = [];

    splitNumbers.forEach(function (splitNumber) {
        lcdDigits.push(allDigitsLcdStrings[splitNumber]);
    });

    return lcdDigits;
}

function generateLcdString(lcdDigits) {

    var lcdString = '';

    for (var line = 0; line < 3; line++) {
        lcdString += generateEveryLineLcdString(lcdDigits, line);
        if (line < 2) {
            lcdString += '\n';
        }
    }

    return lcdString;
}

function generateEveryLineLcdString(lcdDigits, line) {

    var everyLineLcdString = '';

    for (var i = 0; i < lcdDigits.length - 1; i++) {
        everyLineLcdString += lcdDigits[i][line] + ' ';
    }
    everyLineLcdString += lcdDigits[lcdDigits.length - 1][line];

    return everyLineLcdString;
}

function loadAllDigitsLcdStrings() {
    return {
        0: ['._.', '|.|', '|_|'],
        1: ['...', '..|', '..|'],
        2: ['._.', '._|', '|_.'],
        3: ['._.', '._|', '._|'],
        4: ['...', '|_|', '..|'],
        5: ['._.', '|_.', '._|'],
        6: ['._.', '|_.', '|_|'],
        7: ['._.', '..|', '..|'],
        8: ['._.', '|_|', '|_|'],
        9: ['._.', '|_|', '..|']
    }
}

module.exports = {
    loadAllDigitsLcdStrings: loadAllDigitsLcdStrings,
    buildSplitNumbers: buildSplitNumbers,
    buildLcdDigits: buildLcdDigits,
    generateLcdString: generateLcdString
};