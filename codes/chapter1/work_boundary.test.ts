import { assertEquals } from "../deps.ts"

const words = ["cat", "tomcat", "catch", "concat"]

Deno.test('catを含む全て', () => {
    assertEquals(words.filter(word => word.match(/cat/)), words)
})

Deno.test('catの単語のみ', () => {
    assertEquals(
        ["cat"],
        words.filter(word => word.match(/\bcat\b/))
    )
})

Deno.test('catから始まる単語のみ', () => {
    assertEquals(
        ["cat", "catch"],
        words.filter(word => word.match(/\bcat/))
    )
})

Deno.test('catで終わる単語のみ', () => {
    assertEquals(
        ["cat", "tomcat", "concat"],
        words.filter(word => word.match(/cat\b/))
    )
})
