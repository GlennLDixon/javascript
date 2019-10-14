function testStrictNotEqual(val) {
    if (val !== 17) {
        return "Not equal";
    }
    return "Equal";
}

// Change this value to test
console.log(testStrictNotEqual(10));

function testGreaterThan(val) {
    if (val > 100)
        return "Over 100";

    if (val > 10)
        return "Over 10";

    return "10 or Under";
}

console.log(testGreaterThan(101));

function testGreaterOrEqual(val) {
    if (val >= 20)
        return "20 or Over";

    if (val >= 10)
        return "10 or Over";

    return "Less than 10";
}

console.log(testGreaterThanOrEqual(20));