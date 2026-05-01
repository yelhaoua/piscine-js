const normal = /hi/;
const begin = /\bhi/;
const end = /hi$/;
const beginEnd = /(\bhi|hi\b)/;

const text1 = "hi";
const text2 = "hired kimchi";
const text3 = "higher";
const text4 = "likelihood";
const text5 = "Hi";
const text6 = "I love sushi";

console.log(text2.match(beginEnd));
