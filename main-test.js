describe('Unit Testing', function () {
    var lcd = require('./lcd');
    var main = require('./main');
    var number = 1234;

    describe('buildSplitNumbers', function () {

        it('should print correct splitNumbers', function () {
            var splitNumbers = lcd.buildSplitNumbers(number);
            var expectSplitNumbers = ['1', '2', '3', '4'];

            expect(splitNumbers).toEqual(expectSplitNumbers);
        });
    });

    describe('buildLcdDigits', function () {

        it('one number', function () {
            var lcdDigits = lcd.buildLcdDigits(['1'], lcd.loadAllDigitsLcdStrings());
            var expectLcdDigits = [['...', '..|', '..|']];

            expect(lcdDigits).toEqual(expectLcdDigits);
        });

        it('two numbers', function () {
            var lcdDigits = lcd.buildLcdDigits(['1', '3'], lcd.loadAllDigitsLcdStrings());
            var expectLcdDigits = [['...', '..|', '..|'], ['._.', '._|', '._|']];

            expect(lcdDigits).toEqual(expectLcdDigits);
        });

        it('three numbers', function () {
            var lcdDigits = lcd.buildLcdDigits(['1', '2', '3'], lcd.loadAllDigitsLcdStrings());
            var expectLcdDigits = [['...', '..|', '..|'], ['._.', '._|', '|_.'], ['._.', '._|', '._|']];

            expect(lcdDigits).toEqual(expectLcdDigits);
        });
    });

    describe('printLcdString', function () {

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
});