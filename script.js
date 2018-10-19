
// 1. Reverse a string
const randomString = "more cheese please"
function reverseString(string) {
    return string.split("").reverse().join("");
}
console.log(reverseString(randomString));

// 1st kata1 test
function testsplit() {
    let result = reverseString(randomString);
    console.assert(result === ["m", "o", "r", "e", " ",
        "c", "h", "e", "e", "s", "e", " ", "p", "l", "e",
        "a", "s", "e"],
        {
            "function": "randomString.split()",
            "expected": ["m", "o", "r", "e", " ",
                "c", "h", "e", "e", "s", "e", " ", "p", "l", "e",
                "a", "s", "e"],
            "result": result
        });
}
testsplit();

// 2nd kata1 test
function testReverseString() {
    let result = reverseString(randomString);
    console.assert(result === "esaelp eseehc erom",
        {
            "function": "reverseString(randomString)",
            "expected": "esaelp eseehc erom",
            "result": result
        });
}
testReverseString();


// 2. Reverse a sentence
const sentenceString = "I would like more cheese please"
function reverseSentence(string) {
    return string.split(" ").reverse().join("");
}
console.log(reverseSentence(sentenceString));

// 1st kata2 test
function testsplit() {
    let result = split(sentenceString);
    console.assert(result === ["I", "would", "like",
        "more", "cheese", "please"],
        {
            "function": "reverseSentence.split( )",
            "expected": ["I", "would", "like",
            "more", "cheese", "please"],
            "result": result
        });
}

// 2nd kata2 test
// function testSplitReverse(string) {
//     let result = string.split
// }

// 3. Find the minimum value in an array
const numbers = [2, 1, 4, 3]
console.log(Math.min(numbers));
console.log(Math.max(number));


// 4. Find the maximum value in an array
// 5. Calculate a remainder (given a numerator and denominator)
// 6. Return distinct values from a list including duplicates (i.e. "1 3 5 3 7 3 1 1 5" -> "1 3 5 7")
// 7. Return distinct values and their counts (i.e. the list above becomes "1(3) 3(3) 5(2) 7(1)")
// 8. Given a string of expressions (only variables, +, and -) and an object describing a set of variable/value pairs like {a: 1, b: 7, c: 3, d: 14}, return the result of the expression ("a + b+c -d" would be -3).