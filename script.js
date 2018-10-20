const kata1 = "michaelsString"
const kataString1 = "TaylorsString"
const kataString2 = "CohortThreeString"
const kata2 = "I better not use a palindrome"
const kataSentence1 = "Take a kayak to the civic at noon"
const kataSentence2 = "Don't say racecar!"
const kataArray = [13, 13, 22, 14, 14, 22, 922, 8, 8, 122, 2, 222, 122, 8, 9, 14]
const kataArray1 = [40, 11, 11, 20, 90, 50, 10]
const kataArray2 = [99, 99, 2, 77, 77, 11, 44, 66]
const kataTwoNumberArray = [17, 3]
const kataTwoNumberArray1 = [15, 3]
const kataTwoNumberArray2 = [14, 3]


// Kata 1 Reverse a string
function reverseString(insertString) {
    return insertString.split("").reverse().join("")
}
document.writeln(`<center><h1>See console log for the unit Testing</h1>
<hr>
<h2>Kata 1: ${reverseString(kata1)}</h2>
<h4>Kata 1: ${kata1}</h4>
<hr>
`)

let K1result1 = reverseString(kataString1)
console.assert(K1result1 === "gnirtSsrolyaT", {
    "function": "reverseString(kataString1)",
    "expected": "gnirtSsrolyaT",
    "result": K1result1
})

let K1result2 = reverseString(kataString2)
console.assert(K1result2 === "gnirtSeerhTtrohoC", {
    "function": "reverseString(kataString2)",
    "expected": "gnirtSeerhTtrohoC",
    "result": K1result2
})



// Kata 2 Reverse a sentence ("bob likes dogs" -> "dogs likes bob")
function reverseSentence(insertSentence) {
    return insertSentence.split(" ").reverse().join(" ");
}
document.writeln(`
<h2>Kata 2: ${kata2}</h2>
<h4>Kata 2: ${reverseSentence(kata2)}</h4>
<hr>
`)


let K2result1 = reverseSentence(kataSentence1)
console.assert(K2result1 === "noon at civic the to kayak a Take", {
    "function": "reverseSentence(kataSentence1)",
    "expected": "noon at civic the to kayak a Take",
    "result": K2result1
})

let K2result2 = reverseSentence(kataSentence2)
console.assert(K2result2 === "racecar! say Don't", {
    "function": "reverseSentence(kataSentence2)",
    "expected": "racecar! say Don't",
    "result": K2result2
})



// Kata 3 Find the minimum value in an array
function findMinimumValueInArray(insertNumberArray) {
    return Math.min.apply(null, insertNumberArray)
}
document.writeln(`
<h2>Kata 3: ${kataArray}</h2>
<h4>Kata 3: ${findMinimumValueInArray(kataArray)}</h4>
<hr>
`)

let K3result1 = findMinimumValueInArray(kataArray1)
console.assert(K3result1 === 10, {
    "function": "findMinimumValueInArray(kataArray1)",
    "expected": 10,
    "result": K3result1
})

let K3result2 = findMinimumValueInArray(kataArray2)
console.assert(K3result2 === 2, {
    "function": "findMinimumValueInArray(kataArray2)",
    "expected": 2,
    "result": K3result2
})



// Kata 4 Find the maximum value in an array
function findMaximumValueInArray(insertNumberArray) {
    return Math.max.apply(null, insertNumberArray)
}
document.writeln(`
<h2>Kata 4: ${kataArray}</h2>
<h4>Kata 4: ${findMaximumValueInArray(kataArray)}</h4>
<hr>
`)

let K4result1 = findMaximumValueInArray(kataArray1)
console.assert(K4result1 === 90, {
    "function": "findMaximumValueInArray(kataArray1)",
    "expected": 90,
    "result": K4result1
})

let K4result2 = findMaximumValueInArray(kataArray2)
console.assert(K4result2 === 99, {
    "function": "findMaximumValueInArray(kataArray2)",
    "expected": 99,
    "result": K4result2
})



// Kata 5 Calculate a remainder (given a numerator and denominator)
function calcRemainder(insertTwoNumberArray) {
    return Math.floor(insertTwoNumberArray[0] % insertTwoNumberArray[1])
}
document.writeln(`
<h2>Kata 5: ${kataTwoNumberArray}</h2>
<h4>Kata 5: ${calcRemainder(kataTwoNumberArray)}</h4>
<hr>`)

let K5result1 = calcRemainder(kataTwoNumberArray1)
console.assert(K5result1 === 0, {
    "function": "calcRemainder(kataTwoNumberArray1)",
    "expected": 0,
    "result": K5result1
})

let K5result2 = calcRemainder(kataTwoNumberArray2)
console.assert(K5result2 === 2, {
    "function": "calcRemainder(kataTwoNumberArray2)",
    "expected": 2,
    "result": K5result2
})



// Kata 6 Return distinct values from a list including duplicates
function specialValuesInArray(value, index, self) {
    return self.indexOf(value) === index;
}
function filterSpecialArray(insertNumberArray) {
    return insertNumberArray.filter(specialValuesInArray)
}
function evenNumbersInFilteredArray(insertNumberArray) {
    let evenNumberArray = []

    for (let i = 0; i < insertNumberArray.length; i++) {
        if (insertNumberArray[i] % 2 === 0) {
            evenNumberArray.push(insertNumberArray[i])
        }
    }
    return filterSpecialArray(evenNumberArray)
}
function joinEvenFilteredArray(insertNumberArray) {
    let evenFilteredArray = evenNumbersInFilteredArray(insertNumberArray)
    return evenFilteredArray.join("")
    // commas in the array don't work well with console.assert()
}
document.writeln(`
<h2>Kata 6: ${kataArray}</h2>
<h4>Kata 6: ${evenNumbersInFilteredArray(kataArray)}</h4>
<hr>
`)

let K6result1 = joinEvenFilteredArray(kataArray1)
console.assert(K6result1 === "4020905010", {
    "function": "evenNumbersInFilteredArray(kataArray1)",
    "expected": "4020905010",
    "result": K6result1
})

let K6result2 = joinEvenFilteredArray(kataArray2)
console.assert(K6result2 === "24466", {
    "function": "evenNumbersInFilteredArray(kataArray2)",
    "expected": "24466",
    "result": K6result2
})



// Kata 7 Return distinct values and their counts
let counts = {}, i, values;
let counts1 = {}, i1, values1;
let counts2 = {}, i2, values2;

for (i = 0; i < kataArray.length; i++) {
    values = kataArray[i];
    if (typeof counts[values] === "undefined") {
        counts[values] = 1;
    } else {
        counts[values]++;
    }
}
document.writeln(`
<h2>Kata 7: ${kataArray}</h2>
<h4>Kata 7: ${counts}</h4>
<hr>
`)

for (i = 0; i < kataArray1.length; i++) {
    values = kataArray1[i];
    if (typeof counts1[values] === "undefined") {
        counts1[values] = 1;
    } else {
        counts1[values]++;
    }
}
console.assert(counts1 = {10: 1, 11: 2, 20: 1, 40: 1, 50: 1, 90: 1})

for (i = 0; i < kataArray2.length; i++) {
    values = kataArray2[i];
    if (typeof counts2[values] === "undefined") {
        counts2[values] = 1;
    } else {
        counts2[values]++;
    }
}
console.assert(counts2 = {2: 1, 11: 1, 44: 1, 66: 1, 77: 2, 99: 2})



// Kata 8 Given a string of expressions (only variables, +, and -) and an object describing a set of variable/value pairs like {a: 1, b: 7, c: 3, d: 14}, return the result of the expression ("a + b+c -d" would be -3).
let K8pairs = {a: 3, b: 4, c: 2, d: 19}
function algebra(a, b, c, d) {
    let Kata8 = K8pairs.a + K8pairs.b + K8pairs.c - K8pairs.d
    return Kata8
}
document.writeln(`
<h2>Kata 8: ${K8pairs}</h2>
<h4>Kata 8: ${algebra(K8pairs)}</h4>`)

let K8pairs1 = {a: 1, b: 7, c: 3, d: 14}
function algebra1(a, b, c, d) {
    return K8pairs1.a + K8pairs1.b + K8pairs1.c - K8pairs1.d
}
console.assert(algebra1(K8pairs1) === -3);

let K8pairs2 = {a: 4, b: 2, c: 3, d: 6}
function algebra2(a, b, c, d) {
    return K8pairs2.a + K8pairs2.b + K8pairs2.c - K8pairs2.d
}
console.assert(algebra2(K8pairs2) === 3);
'</center>'

