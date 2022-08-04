import { assert, assertEquals } from "../deps.ts"

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

Deno.test("separateの誤字を含めた正規表現による検索", () => {
    assertEquals(
        sentences.filter((sentence) => sentence.match(/sep[ea]r[ea]te/)),
        [
            "I want to separate this!",
            "Yes, I would like to seperate this.",
            "Because to separete this is My Life Mission.",
            "I only want to seperete...",
        ] as string[],
    )
})

Deno.test("Hタグのmatch", () => {
    const isMatch = (target: string) => target.match(/<[Hh][1-6]>/)
    assert(isMatch('<h1>'))
    assert(isMatch('<H2>'))
    assert(isMatch('<H6>'))
    assert(!isMatch('<a1>'))
    assert(!isMatch('<h0>'))
    assert(!isMatch('<h7>'))
})

Deno.test('あいうえお以外の文字', () => {
    assert("ん".match(/[^あ-お]/))
    assert(!"う".match(/[^あ-お]/))
    assert("q ".match(/q[^e]/))
})