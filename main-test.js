describe('Unit Testing', function () {
    var lcd = require('./lcd');
    var number = 1234;

    it('should print correct character array', function () {
        var characters = lcd.buildCharacters(number);
        var expectCharacters = ['1', '2', '3', '4'];

        expect(characters).toEqual(expectCharacters);
    });

    it('should print correct lcdDigits', function () {
        var lcdDigits = lcd.buildLcdDigits(['1', '2', '3', '4'], lcd.loadAllDigitsLcdStrings());

        var expectLcdDigits =
            [
                ['...', '..|', '..|'],
                ['._.', '._|', '|_.'],
                ['._.', '._|', '._|'],
                ['...', '|_|', '..|']
            ];

        expect(lcdDigits).toEqual(expectLcdDigits);
    });
});

describe('Integration Testing', function () {
    var main = require('./main');
    var number = 12;

    it('should print correct lcd string', function() {

        spyOn(console, 'log');

        main.printLcdString(number);

        var expectLcdString =
            '...' + ' ' + '._.\n' +
            '..|' + ' ' + '._|\n' +
            '..|' + ' ' + '|_.';

        expect(console.log).toHaveBeenCalledWith(expectLcdString);
    });
});