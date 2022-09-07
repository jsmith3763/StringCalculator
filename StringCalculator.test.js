const stringCalculatorFunctions = require('./StringCalculator')

describe('String calculator checkForNegatives function', () => {
    test('Should return true if string contains negative number', () => {
        expect(stringCalculatorFunctions.checkForNegatives('1,2,3,-10')).toBeTruthy();
    })

    test('Should return false if string does not contain negative number', () => {
        expect(stringCalculatorFunctions.checkForNegatives('1,2,3,10')).toBeFalsy();
    })
})

describe('String Calculator splitArray function', () => {
    test('Should be able to split string by commas and return array of separate strings', () => {
        expect(stringCalculatorFunctions.getArrayOfSplitNumStrings("1,2")).toEqual(["1", "2"]);
    })
})

describe('String Calculator convertStringArrayToNumberArray function', () => {

    test('Should recieve an array of strings and return an array of numbers', () => {
        expect(stringCalculatorFunctions.convertStringArrayToNumberArray("1,2")).toEqual([1, 2]);
    })
})

describe('String Calculator Add Function', () => {

    test('Should be able to add string of two nums separated by a comma together', () => {
        expect(stringCalculatorFunctions.add('1,2')).toBe(3);
    })

    test('Should be able to add more than two nums separated by a comma together', () => {
        expect(stringCalculatorFunctions.add('1,2,3,10')).toBe(16);
    })

    test('Should be able to add strings that are separated by new lines and commas', () => {
        expect(stringCalculatorFunctions.add('1,2,3\n,8')).toBe(14)
    })

    test('Should not add negative numbers - returns Negative numbers not allowed', () => {
        expect(stringCalculatorFunctions.add('1,2,3,-5')).toBe('Negative numbers not allowed')
    })
})