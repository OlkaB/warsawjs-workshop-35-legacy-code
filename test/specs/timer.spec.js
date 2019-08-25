const Timer = require('../../src/Pomodoro-Clock/timer');

describe('Timer', () => {
    let $item = null;
    let timer = null;

    beforeEach(() => {
        $item = document.createElement('cookie');
        timer = new Timer();
    });

    describe('decreaseElementNumber', () => {
        it('Should reduce value', () => {
            // Arrange
            $item.textContent = '43';

            // Act
            timer.decreaseElementNumber($item);

            // Assert
            expect($item.textContent).toEqual('42');

            // Teardown
            // ...
        });

        it('Should return MINIMUM_CLOCK_VALUE when put number 0', () => {
            $item.textContent = '0';
            timer.decreaseElementNumber($item);
            expect($item.textContent).toEqual('0');
        });

        it('Should return MINIMUM_CLOCK_VALUE when put number -1', () => {
            $item.textContent = '-1';
            timer.decreaseElementNumber($item);
            expect($item.textContent).toEqual('0');
        });

        it('Should throw exception when HTML element does not have number as a value', () => {
            $item.textContent = 'cookie';

            expect(() => {
                timer.decreaseElementNumber($item);
            }).toThrow();
        });
    });

    describe('increaseElementNumber', () => {
        it('Should enlarge value', () => {
            $item.textContent = '40';
            timer.increaseElementNumber($item);
            expect($item.textContent).toEqual('41');
        });

        it('Should return MAXIMUM_CLOCK_VALUE when put number out of range', () => {
            $item.textContent = '100';
            timer.increaseElementNumber($item);
            expect($item.textContent).toEqual('60');
        });

        it('Should throw exception when HTML element does not have number as a value', () => {
            $item.textContent = 'cookie';

            expect(() => {
                timer.increaseElementNumber($item);
            }).toThrow();
        });
    });

    describe('increaseElementNumber', () => {
        it('should call _startCounter function', () => {
            // Arrange
            let $break = document.createElement('break');
            let $session = document.createElement('session');
            $break.textContent = '1';
            $session.textContent = '1';

            timer._startCounter = jest.fn();
            jest.spyOn(timer, '_startCounter');

            // Act
            timer.startTimer($break, $session);

            // Assert
            expect(timer._startCounter).toHaveBeenCalled();
            expect(timer._startCounter).toHaveBeenCalledTimes(1);
            expect(timer._startCounter).toHaveBeenCalledWith(Timer.ONE_MINUTE_IN_MILISECONDS, Timer.ONE_MINUTE_IN_MILISECONDS);
        });
    });
})
;
