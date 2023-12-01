import formatStringByWordsLength from "./formatStringByWordsLength.js";

const result1 = "This is a long, long, long sentence.";
console.log(formatStringByWordsLength(result1)); //THIS IS A LONG, LONG, LONG SENTENCE.

const result2 = "This is short one.";
console.log(formatStringByWordsLength(result2)); //this is short one.

const result3 = "This is a short one.";
console.log(formatStringByWordsLength(result3)); //this is a short one.
