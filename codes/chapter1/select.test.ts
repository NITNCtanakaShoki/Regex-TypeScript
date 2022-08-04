import { assert } from "../deps.ts"

Deno.test('grayとgreyのさまざまなマッチ方法', () => {

    const assertRegex = (regex: RegExp) => {
        assert('grey'.match(regex))
        assert('gray'.match(regex))
        assert(!'glay'.match(regex))
    }

    assertRegex(/gray|grey/)
    assertRegex(/gr[ea]y/)
    assertRegex(/gr(a|e)y/)
})