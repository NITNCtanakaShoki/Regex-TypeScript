import { assert } from "../deps.ts"

Deno.test('colorとcolourにmatch', () => {
    const isMatch = (target: string) => target.match(/colou?r/)

    assert( isMatch('color'))
    assert( isMatch('colour'))
    assert(!isMatch('coloer'))
})

Deno.test('日付に疑問符でmatch', () => {
    const isMatch = (target: string) => target.match(/July? (fourth|4th|4)/) !== null

    assert(isMatch('July fourth'))
    assert(isMatch('Jul fourth'))
    assert(isMatch('July 4th'))
    assert(isMatch('Jul 4'))
    assert(!isMatch('July 3'))
    assert(!isMatch('Juli 4'))
})