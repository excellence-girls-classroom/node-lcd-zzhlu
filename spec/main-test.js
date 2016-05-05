var lcd = require('../main/lcd.js');
var main = require('../main/main.js');

describe('Unit Testing', function () {
    var number = 1234;

    describe('buildSplitNumbers', function () {

        it('should print correct splitNumbers', function () {
            var splitNumbers = lcd.buildSplitNumbers(number);
            var expectSplitNumbers = ['1', '2', '3', '4'];

            expect(splitNumbers).toEqual(expectSplitNumbers);
        });
    });

    describe('buildLcdDigits', function () {

        it('should print correct one number', function () {
            var lcdDigits = lcd.buildLcdDigits(['1'], lcd.loadAllDigitsLcdStrings());
            var expectLcdDigits = [['...', '..|', '..|']];

            expect(lcdDigits).toEqual(expectLcdDigits);
        });

        it('should print correct two numbers', function () {
            var lcdDigits = lcd.buildLcdDigits(['1', '3'], lcd.loadAllDigitsLcdStrings());
            var expectLcdDigits = [['...', '..|', '..|'], ['._.', '._|', '._|']];

            expect(lcdDigits).toEqual(expectLcdDigits);
        });

        it('should print correct three numbers', function () {
            var lcdDigits = lcd.buildLcdDigits(['1', '2', '3'], lcd.loadAllDigitsLcdStrings());
            var expectLcdDigits = [
                ['...', '..|', '..|'],
                ['._.', '._|', '|_.'],
                ['._.', '._|', '._|']
            ];

            expect(lcdDigits).toEqual(expectLcdDigits);
        });
    });

    describe('generateLcdString', function () {

        it('should generate correct lcdString', function () {
            var lcdString = lcd.generateLcdString([
                ['._.', '..|', '..|'],
                ['._.', '|_|', '|_|'],
                ['._.', '|_|', '..|'],
                ['._.', '|.|', '|_|']
            ]);
            var expectLcdString =
                '._.' + ' ' + '._.' + ' ' + '._.' + ' ' + '._.' + '\n' +
                '..|' + ' ' + '|_|' + ' ' + '|_|' + ' ' + '|.|' + '\n' +
                '..|' + ' ' + '|_|' + ' ' + '..|' + ' ' + '|_|';

            expect(lcdString).toEqual(expectLcdString);
        });
    });
});

describe('Integration Testing', function () {
    var number = 1234;

    it('should print correct lcd string', function () {

        spyOn(console, 'log');

        main.printLcdString(number);

        var expectLcdString =
            '...' + ' ' + '._.' + ' ' + '._.' + ' ' + '...' + '\n' +
            '..|' + ' ' + '._|' + ' ' + '._|' + ' ' + '|_|' + '\n' +
            '..|' + ' ' + '|_.' + ' ' + '._|' + ' ' + '..|';

        expect(console.log).toHaveBeenCalledWith(expectLcdString);
    });
});