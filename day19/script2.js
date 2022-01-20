//Create a closure which has three inner functions
function outerFunction() {
    let count = 0;
    function firstInnerFunction() {
        return count ++;
    }
    function secInnerFunction() {
        return count--;
    }
    function thirdInnerFunction() {
        let sqr = count * count;
        return sqr;
    }

    return {
        plusOne:firstInnerFunction(),
        minusOne: secInnerFunction(),
        sqr: thirdInnerFunction()
    }
}

const y = outerFunction();