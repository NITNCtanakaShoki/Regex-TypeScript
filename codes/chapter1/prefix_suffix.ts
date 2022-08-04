const sentences =
`    Hello, World!
cat is pretty?
This is a cat

Thank you for U`
    .split("\n")

console.log(sentences.filter(sentence => sentence.match(/^cat/)))
/* [ "cat is pretty?" ] */

console.log(sentences.filter(sentence => sentence.match(/cat$/)))
/* [ "This is a cat" ] */

console.log(sentences.filter(sentence => sentence.match(/^$/)))
/* [ "" ] */
