// function testStrictNotEqual(val) {
//     if (val !== 17) {
//         return "Not equal";
//     }
//     return "Equal";
// }

// // Change this value to test
// console.log(testStrictNotEqual(10));

// function testGreaterThan(val) {
//     if (val > 100)
//         return "Over 100";

//     if (val > 10)
//         return "Over 10";

//     return "10 or Under";
// }

// console.log(testGreaterThan(101));

// function testGreaterOrEqual(val) {
//     if (val >= 20)
//         return "20 or Over";

//     if (val >= 10)
//         return "10 or Over";

//     return "Less than 10";
// }

// console.log(testGreaterThanOrEqual(20));

// function testLessThan(val) {
//     if (val < 25)
//         return "Under 25";

//     if (val < 55)
//         return "Under 55";

//     return "55 or Over";
// }

// console.log(testLessThan(56));

// function testLessOrEqual(val) {
//     if (val <= 12)
//         return "Smaller Than or Equal to 12";

//     if (val <= 24)
//         return "Smaller Than or Equal to 24";

//     return "More Than 24";
// }

// console.log(testLessThanOrEqual(13));

// function testLogicalAnd(val) {
//     // Only change code below this line

//     if (val <= 50 && val >= 25) {
//         return "Yes";
//     }

//     // Only change code above this line
//     return "No";
// }

// // Change this value to test
// console.log(testLogicalAnd(10));

// function testLogicalOr(val) {
//     // Only change code below this line
//     if (val < 10 || val > 20) {
//         return "Outside";
//     }

//     // Only change code above this line
//     return "Inside";
// }

// console.log(testLogicalOr(5));

// function testElse(val) {
//     var result = "";
//     // Only change code below this line

//     if (val > 5) {
//         result = "Bigger than 5";
//     } else {
//         result = "5 or smaller";
//     }

//     // Only change code above this line
//     return result;
// }

// // Change this value to test
// testElse(4);

// function testElseIf(val) {
//     if (val > 10) {
//         return "Greater than 10";
//     } else if (val < 5) {
//         return "Smaller than 5";
//     } else {
//         return "Between 5 and 10";
//     }
// }

// // Change this value to test
// testElseIf(7);

function testSize(num) {
    // Only change code below this line

    if (num < 5) {
        return "Tiny";
    }else if (num < 10) {
        return "Small";
    }else if (num < 15) {
        return "Medium";
    }else if (num < 20) {
        return "Large";
    }return "Huge";
}

console.log(testSize(4));

var names = [
    "Hole-in-one!",
    "Eagle",
    "Birdie",
    "Par",
    "Bogey",
    "Double Bogey",
    "Go Home!"
];
function golfScore(par, strokes) {
    // Only change code below this line
    if (strokes == 1) {
        return names[0];
    } else if (strokes <= par - 2) {
        return names[1];
    } else if (strokes == par - 1) {
        return names[2];
    } else if (strokes == par) {
        return names[3];
    } else if (strokes == par + 1) {
        return names[4];
    } else if (strokes == par + 2) {
        return names[5];
    } else {
        return names[6];
    }
    // Only change code above this line
}

// Change these values to test
golfScore(5, 4);

function caseInSwitch(val) {
    var answer = "";
    // Only change code below this line
    switch (val) {
        case 1:
            return "alpha";
            break;
        case 2:
            return "beta";
            break;
        case 3:
            return "gamma";
            break;
        case 4:
            return "delta";
            break;
    }

    // Only change code above this line
    return answer;
}

// Change this value to test
caseInSwitch(1);