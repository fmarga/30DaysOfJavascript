//Create a closure which has one inner function
function outerFunction() {
    let count = 0;
    function innerFunction() {
        return count++;
    }
    return innerFunction();
}

const x = outerFunction();