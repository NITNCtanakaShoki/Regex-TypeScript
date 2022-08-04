const sentences =
`    Hello, World!
I want to separate this!
Really?
Yes, I would like to seperate this.
Oh, Why?
Because to separete this is My Life Mission.
That's crazy.
I only want to seperete...`
        .split("\n")

console.log(sentences.filter(sentence => sentence.match(/sep[ea]r[ea]te/)))
/*
[
    "I want to separate this!",
    "Yes, I would like to seperate this.",
    "Because to separete this is My Life Mission.",
    "I only want to seperete..."
]
*/
