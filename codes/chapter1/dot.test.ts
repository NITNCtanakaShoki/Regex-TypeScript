import { assert } from '../deps.ts'

Deno.test('クラスを用いた日付の判定', () => {
    assert( "03/19/76".match(/03[-./]19[-./]76/))
    assert( "03-19-76".match(/03[-./]19[-./]76/))
    assert( "03/19/76".match(/03[-./]19[-./]76/))
    assert(!"03_19_76".match(/03[-./]19[-./]76/))
})

Deno.test('ドットを用いた日付の判定', () => {
    assert("03/19/76".match(/03.19.76/))
    assert("03-19-76".match(/03.19.76/))
    assert("03/19/76".match(/03.19.76/))
    assert("03_19_76".match(/03.19.76/))
})