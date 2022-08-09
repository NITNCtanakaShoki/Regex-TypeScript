import { assert } from "../deps.ts"

Deno.test('1個以上の繰り返し+', () => {
    assert("12345".match(/[1-9]+/))
    assert("1".match(/[1-9]+/))
    assert(!"".match(/[1-9]+/))
})

Deno.test('0個以上の繰り返し*', () => {
    assert("12345".match(/[1-9]*/))
    assert("1".match(/[1-9]*/))
    assert("".match(/[1-9]*/))
})

Deno.test('0個以上の繰り返し+?', () => {
    assert("12345".match(/([1-9]+)?/))
    assert(    "1".match(/([1-9]+)?/))
    assert(     "".match(/([1-9]+)?/))
    /* /[1-9]+?/ だと、?が+を指すので0個を許容しない */
})