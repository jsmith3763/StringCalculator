function checkForNegatives(stringOfNums) {
    if (stringOfNums.includes('-')) return true
}


function getArrayOfSplitNumStrings(stringOfNums) {
    const arrayOfSplitNums = stringOfNums.split(',');
    return arrayOfSplitNums;
}

function convertStringArrayToNumberArray(stringOfNums) {
    let arrayOfStringNums = getArrayOfSplitNumStrings(stringOfNums)
    let numberArray = []
    for (let index = 0; index < arrayOfStringNums.length; index++) {
        numberArray.push(parseInt(arrayOfStringNums[index]))
    }
    return numberArray;
}

function add(stringOfNums) {
    if (checkForNegatives(stringOfNums)) return 'Negative numbers not allowed'
    let sum = 0
    let numArray = convertStringArrayToNumberArray(stringOfNums)
    for (let index = 0; index < numArray.length; index++) {
        sum += numArray[index];
    }
    return sum;
}

module.exports = {
    checkForNegatives,
    getArrayOfSplitNumStrings,
    convertStringArrayToNumberArray,
    add
}

