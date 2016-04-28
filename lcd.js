function buildCharacters(number) {

    return number.toString().split('');
}

function findLcdStrings(characters, allDigitsLcdStrings) {

    for (var i = 0; i < characters.length; i++) {
        for (var k = 0; k < allDigitsLcdStrings.length; k++) {
            if (allDigitsLcdStrings[k].digit === characters[i])
                return allDigitsLcdStrings[k].lcdStrings;
        }
    }
}

function buildLcdDigits(characters, allDigitsLcdStrings) {

    var lcdDigits = [];
    characters.forEach(function (character) {
        lcdDigits.push(findLcdStrings(character, allDigitsLcdStrings));
    });

    return lcdDigits;
}

function generateLcdString(lcdDigits) {

    var lcdString = '';

    for (var k = 0; k < 3; k++) {
        for (var i = 0; i < lcdDigits.length - 1; i++) {
            lcdString += lcdDigits[i][k] + ' ';
        }
        lcdString += lcdDigits[lcdDigits.length - 1][k];

        if (k < 2)
            lcdString += '\n';
    }
    return lcdString;
}

function loadAllDigitsLcdStrings() {
    return [
        {
            digit: '0',
            lcdStrings: ['._.', '|.|', '|_|']
        },
        {
            digit: '1',
            lcdStrings: ['...', '..|', '..|']
        },
        {
            digit: '2',
            lcdStrings: ['._.', '._|', '|_.']
        },
        {
            digit: '3',
            lcdStrings: ['._.', '._|', '._|']
        },
        {
            digit: '4',
            lcdStrings: ['...', '|_|', '..|']
        },
        {
            digit: '5',
            lcdStrings: ['._.', '|_.', '._|']
        },
        {
            digit: '6',
            lcdStrings: ['._.', '|_.', '|_|']
        },
        {
            digit: '7',
            lcdStrings: ['._.', '..|', '..|']
        },
        {
            digit: '8',
            lcdStrings: ['._.', '|_|', '|_|']
        },
        {
            digit: '9',
            lcdStrings: ['._.', '|_|', '..|']
        }
    ];
}

module.exports = {
    loadAllDigitsLcdStrings: loadAllDigitsLcdStrings,
    buildCharacters: buildCharacters,
    buildLcdDigits: buildLcdDigits,
    generateLcdString: generateLcdString
};