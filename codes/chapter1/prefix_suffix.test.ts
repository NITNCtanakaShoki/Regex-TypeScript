import { assertEquals } from "../deps.ts"

const sentences = `    Hello, World!
cat is pretty?
This is a cat

Thank you for U`
    .split("\n")

Deno.test("行頭+c+a+tの検索", () => {
    assertEquals(
        sentences.filter((sentence) => sentence.match(/^cat/)),
        ["cat is pretty?"],
    )
})

Deno.test("c+a+t+末尾の検索", () => {
    assertEquals(
        sentences.filter((sentence) => sentence.match(/cat$/)),
        ["This is a cat"],
    )
})

Deno.test("行頭+末尾の検索", () => {
    assertEquals(
        sentences.filter((sentence) => sentence.match(/^$/)),
        [""],
    )
})
