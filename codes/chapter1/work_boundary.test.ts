import { assertEquals } from "../deps.ts"

const words = ["cat", "tomcat", "catch", "concat"]

Deno.test('catを含む全て', () => {
    assertEquals(words.filter(word => word.match(/cat/)), words)
})

Deno.test('catの単語のみ', () => {
    assertEquals(
        words.filter(word => word.match(/\bcat\b/)),
        ["cat"],
    )
})

Deno.test('catから始まる単語のみ', () => {
    assertEquals(
        words.filter(word => word.match(/\bcat/)),
        ["cat", "catch"],
    )
})

Deno.test('catで終わる単語のみ', () => {
    assertEquals(
        words.filter(word => word.match(/cat\b/)),
        ["cat", "tomcat", "concat"],
    )
})
