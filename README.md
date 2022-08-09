# TypeScript Regex Practice

## Usage
denoで実行するものになります。denoをインストールした上で以下のコマンドを叩いてください。

```shell
git clone https://github.com/NITNCtanakaShoki/Regex-TypeScript.git
cd Regex-TypeScript
deno test
```

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

クラスの中には好きな数だけ文字を並べることができ、たとえば「[123456]｣は、1〜6のうちのいずれともマッチする。

#### 否定文字クラス
「[...]｣の代わりに「[^...]｣というクラスを使うと、そこに指定されていない任意の文字とマッチする。例えば、「[^1-6]｣は1から6以外の文字とマッチする。^をクラスの先頭に置くと、そこに指定されたものが否定される。

[chapter1 class character](./codes/chapter1/character_class.test.ts)

#### 任意の文字とマッチさせるドット
『03/19/76』『03-19-76』『03.19.76』のような日付を検索したい場合に

「03[-./]19[-./]76｣としてもいいが、「03.19.76｣の方が楽だ

.はクラスの中だとメタ文字にはならない。

[chapter1 dot](./codes/chapter1/dot.test.ts)

#### 選択
「Bob|Robert｣は、BobまたはRobertの場合にマッチする。

「gray|grey｣は「gr(e|a)y｣や「gr[ae]y｣と同義である。（丸括弧もメタ文字である）

[chapter1 select](./codes/chapter1/select.test.ts)

#### 単語の初めと終わり
「\<｣が単語の初めの部分を指し、「\>｣が単語の終わりを示すメタ文字。

catという単語を探す際には、「\<cat\>｣

catから始まる単語であれば、「\<cat｣

catで終わる単語であれば、「cat\>｣

などなど。しかし、JavaScriptの正規表現では通用しなく、どちらも「\b｣で単語の始まりと終わりのメタ文字となっていた。

[chapter1 word start end](./codes/chapter1/work_boundary.test.ts)

#### 疑問符
あってもなくてもいい文字。

colorとcolourは、uがあるかないかでしかない。これらを指定する際には、

「colou?r｣で指定できる。疑問符?は直前の文字に対してのみ適用される。

「(Jul|July) (fourth|4th|4)｣は「July? (fourth|4(th)?)｣と同義である。

[chapter1 question mark](./codes/chapter1/question_mark.test.ts)

#### 繰り返し
直前の文字を繰り返す。

#### 「+｣
直前にある要素を1個以上を意味する

[chapter1 plus](./codes/chapter1/repeat.test.ts)

##### 「*｣（スター）
直前にある要素を0個以上を意味する

[chapter1 star](./codes/chapter1/repeat.test.ts)

