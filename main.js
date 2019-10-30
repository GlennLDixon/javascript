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

// function testSize(num) {
//     // Only change code below this line

//     if (num < 5) {
//         return "Tiny";
//     }else if (num < 10) {
//         return "Small";
//     }else if (num < 15) {
//         return "Medium";
//     }else if (num < 20) {
//         return "Large";
//     }return "Huge";
// }

// console.log(testSize(4));

// var names = [
//     "Hole-in-one!",
//     "Eagle",
//     "Birdie",
//     "Par",
//     "Bogey",
//     "Double Bogey",
//     "Go Home!"
// ];


// function golfScore(par, strokes) {
//     // Only change code below this line
//     if (strokes == 1) {
//         return names[0];
//     } else if (strokes <= par - 2) {
//         return names[1];
//     } else if (strokes == par - 1) {
//         return names[2];
//     } else if (strokes == par) {
//         return names[3];
//     } else if (strokes == par + 1) {
//         return names[4];
//     } else if (strokes == par + 2) {
//         return names[5];
//     } else {
//         return names[6];
//     }
//     // Only change code above this line
// }

// // Change these values to test
// golfScore(5, 4);

// function caseInSwitch(val) {
//     var answer = "";
//     // Only change code below this line
//     switch (val) {
//         case 1:
//             return "alpha";
//             break;
//         case 2:
//             return "beta";
//             break;
//         case 3:
//             return "gamma";
//             break;
//         case 4:
//             return "delta";
//             break;
//     }

//     // Only change code above this line
//     return answer;
// }

// // Change this value to test
// console.log(caseInSwitch(1));

// function switchOfStuff(val) {
//     var answer = "";

//     switch (val) {
//         case "a":
//             answer = "apple";
//             break;
//         case "b":
//             answer = "bird";
//             break;
//         case "c":
//             answer = "cat";
//             break;
//         default:
//             answer = "stuff";
//     }

//     return answer;
// }

// console.log(switchOfStuff("c"));

// function sequentialSizes(val) {
//     var answer = "";
//     // Only change code below this line
//     switch (val) {
//         case 1:
//         case 2:
//         case 3:
//             return "Low";
//             break;
//         case 4:
//         case 5:
//         case 6:
//             return "Mid";
//             break;
//         case 7:
//         case 8:
//         case 9:
//             return "High";
//             break;
//     }
//     // Only change code above this line
//     return answer;
// }

// console.log(sequentialSizes(7));

// function chainToSwitch(val) {
//     var answer = "";
//     // Only change code below this line
//     switch (val) {
//         case "bob":
//             answer = "Marley";
//             break;
//         case 42:
//             answer = "The Answer";
//             break;
//         case 1:
//             answer = "There is no #1";
//             break;
//         case 99:
//             answer = "Missed me by this much!";
//             break;
//         case 7:
//             answer = "Ate Nine";
//             break;
//     }
//     // Only change code above this line
//     return answer;
// }
// // Change this value to test
// console.log(chainToSwitch(7));

// function isLess(a, b) {
//     // Fix this code
//     return a <= b;
// }
// // Change these values to test
// console.log(isLess(10, 15));

// // Setup
// function abTest(a, b) {
//     // Only change code below this line
//     if (a < 0 || b < 0) {
//         return undefined;
//     }

//     // Only change code above this line

//     return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
// }

// // Change values below to test your code
// console.log(abTest(2, 2));

// var count = 0;

// function cc(card) {
//     // Only change code below this line
//     switch (card) {
//         case 2:
//         case 3:
//         case 4:
//         case 5:
//         case 6:
//             count++;
//             break;
//         case 10:
//         case "J":
//         case "Q":
//         case "K":
//         case "A":
//             count--;
//             break;
//     }
//     if (count > 0) {
//         return count + " Bet";
//     } else {
//         return count + " Hold";
//     }
// }
  
//     console.log(cc(2));

// var myDog = {
// "name": "Joe",
// "legs": 4,
// "tails": 1,
// "friends": ["many", "Ade"]

// };

// console.log(myDog);

var testObj = {
    hat: "ballcap",
    shirt: "jersey",
    shoes: "cleats"
};

// Only change code below this line

var hatValue = testObj.hat; // Change this line
var shirtValue = testObj.shirt; // Change this line

var testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};

// Only change code below this line

var entreeValue = testObj["an entree"]; // Change this line
var drinkValue = testObj["the drink"]; // Change this line

// Setup
var testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};

// Only change code below this line;

var playerNumber = 16; // Change this Line
var player = testObj[playerNumber]; // Change this Line

function multiplyAll(arr) {
    var product = 1;
    // Only change code below this line
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            product = product * arr[i][j];
        }
    }
    // Only change code above this line
    return product;
}

// Modify values below to test your code
console.log(multiplyAll([[1, 2], [3, 4], [5, 6, 7]]));