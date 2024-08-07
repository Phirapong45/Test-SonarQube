//functions below make for complexity case

function calculate(value) {
    if (typeof value !== 'number') {
        throw new Error("Input must be a number");
    }

    if (value > 50) {
        return "Greater than 50";
    } else if (value > 40) {
        if (value % 2 === 0) {
            return "Greater than 40 and even";
        } else {
            return "Greater than 40 and odd";
        }
    } else if (value > 30) {
        if (value % 2 === 0) {
            return "Between 30 and 40 and even";
        } else {
            return "Between 30 and 40 and odd";
        }
    } else if (value > 20) {
        if (value % 2 === 0) {
            return "Between 20 and 30 and even";
        } else {
            return "Between 20 and 30 and odd";
        }
    } else if (value > 10) {
        if (value % 3 === 0) {
            return "Between 10 and 20 and divisible by 3";
        } else {
            return "Between 10 and 20 and not divisible by 3";
        }
    } else if (value > 0) {
        if (value % 5 === 0) {
            return "Between 0 and 10 and divisible by 5";
        } else {
            return "Between 0 and 10 and not divisible by 5";
        }
    } else if (value === 0) {
        return "Equal to 0";
    } else {
        if (value % 2 === 0) {
            return "Less than 0 and even";
        } else {
            return "Less than 0 and odd";
        }
    }
}

module.exports = calculate;
