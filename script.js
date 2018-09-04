
// 1. Reverse a string
const randomString = "more cheese please"

function reverseString(string) {
    return string.split("").reverse().join("");

}

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

// 1st kata2 test
function testsplit() {
    let result = reverseSentence(sentenceString);
    console.assert(result === ["I", "would", "like",
        "more", "cheese", "please"],
        {
            "function": "randomString.split( )",
            "expected": ["I", "would", "like",
            "more", "cheese", "please"],
            "result": result
        });
}

// 2nd kata2 test
