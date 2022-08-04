# TypeScript Regex Practice

## 正規表現

本格的な正規表現は2種類の文字から成り立っている。「\*｣のような特殊文字は**メタ文字**(metacharacter)と呼ばれ、それ以外のものは全て**リテラル**(literal)と呼ばれる。

### メタ文字

#### 「^｣（キャレット）

テキストにおけるチェック対象行の**先頭**を表す。

正規表現は、表記に忠実に解釈する習慣を身につけてほしい。たとえば、

「^cat｣は、catが先頭にある行とマッチする

とは考えず、

「^cat｣は、行頭があり、その直後にcがあり、その直後にa続き、またその直後にtが存在するときにマッチする

と考える。

[chapter1 prefix_suffix](./codes/chapter1/prefix_suffix.test.ts)

#### 「$｣

テキストにおけるチェック対象行の**末尾**を表す。

[chapter1 prefix_suffix](./codes/chapter1/prefix_suffix.test.ts)

#### 文字クラス(character class)

その場所に存在しても良い文字の集合を指定できる。

"separate"という文字を検索したいが、よく"seperate", "separete"だったか毎回忘れるので、eでもaでも許容して検索したい時など

「sep[ea]r[ea]te｣

[chapter1 class character](./codes/chapter1/character_class.test.ts)
