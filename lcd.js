function buildSplitNumbers(number) {

    var splitNumbers = number.toString().split('');

    splitNumbers.forEach(function (splitNumber) {
        splitNumber = parseInt(splitNumber);
    });

    return splitNumbers;
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
        if (line < 2)
            lcdString += '\n';
    }

    return lcdString;
}

function generateEveryLineLcdString(lcdDigits, line) {

    var EveryLineLcdString = '';

    for (var i = 0; i < lcdDigits.length - 1; i++) {
        EveryLineLcdString += lcdDigits[i][line] + ' ';
    }
    EveryLineLcdString += lcdDigits[lcdDigits.length - 1][line];

    return EveryLineLcdString;
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