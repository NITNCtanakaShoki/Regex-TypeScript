import { assertEquals } from "../deps.ts"

const sentences = `    Hello, World!
I want to separate this!
Really?
Yes, I would like to seperate this.
Oh, Why?
Because to separete this is My Life Mission.
That's crazy.
I only want to seperete...`
    .split("\n")

Deno.test("separateの誤字を含めた正規表現による検索", () => {
    assertEquals(
        [
            "I want to separate this!",
            "Yes, I would like to seperate this.",
            "Because to separete this is My Life Mission.",
            "I only want to seperete...",
        ] as string[],
        sentences.filter((sentence) => sentence.match(/sep[ea]r[ea]te/)),
    )
})
