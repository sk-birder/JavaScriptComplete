// 初期化していない変数を呼び出すとbefore initializationエラーになる
// console.log(count);

// 初期値無しでも宣言可能。undefinedが代入される
let count;
console.log(count);

// letは再代入可能だが、同じ名前での再宣言は出来ない
// let count;

// constは再代入・再宣言は出来ない。また、初期値が必須になる
// 再代入の必要がないものは原則constを使う。この値は変わらない、と意図がわかりやすいコードになる。
// const daysInweek; // エラーになる
const daysInWeek = 7;

// 変数の命名規則
// lowerCamelCaseがベストプラクティス。$と_も使用可能。
let tomatoCount;
// 数字を先頭にすることは出来ない。
// let 7tomatoCount;

// 算術演算子
// ほぼJavaと同じだが、累乗を使える
const resultExponent = 2 ** 3;
console.log(resultExponent);

// インクリメント
// 前置と後置
let numInc = 1;
console.log(numInc++); // 1が返った後に演算する
console.log(++numInc); // 1を加算した後に値を返すため、3が返る
// 変なところで改行を入れると意図しない挙動になるため注意すること

// バッククォートを用いて変数呼び出しを含めた文字列を作る
// 変数の呼び出しは${変数名}と記述する。
// エスケープシーケンス\も使用可能。Javaとほぼ同じ。
count = 100;
let message = `あなたは\'${count}\'人目のお客様です`;
console.log(message);
// バッククォート内の改行はそのまま改行として扱われる。半角スペースも表示される。
message = `1行目
  2行目
3行目`;
console.log(message);

// 数字以外のString型の文字列に算術演算子を適用するとNaNが返る
// NaN自体の型はNumber型である
message = 'hoge';
let result = message - 10;
console.log(result);
console.log(typeof result);

// 明示的な型変換
// String -> Number
const userInput = '10.9';
let calcResult;
calcResult = Number(userInput) + 1;
calcResult = parseInt(userInput) + 1;   // parseIntのみ小数点以下切り捨て
calcResult = parseFloat(userInput) + 1;
calcResult = +userInput + 1;
console.log(calcResult);
// Number -> String
// ただの連結演算子で変換できるので、使用機会は少ないかも
const tenNumber = 10;
calcResult = '10' + String(tenNumber);
calcResult = '10' + tenNumber.toString(); // これだけfunctionではなくmethod Rubyのto_sに似ている
console.log(calcResult);

// 配列
// Javaと違い` [] `で初期化する。各要素のデータ型はバラバラでも良い
let array = ['apple', 1 , true];
// pushとpopで配列の末尾への追加・削除、unshiftとshiftで配列の戦闘への追加・削除が可能

// オブジェクト
// キーとバリューのセット(プロパティ)の集合。Rubyのハッシュに似たもの
const coffee = {
  name: 'Chocolate Moca',
  size: 350,
  isHot: true,
  toppings: ['Cinnamon', 'Caramel'],
  nutritions: { // オブジェクトの中にオブジェクトを入れることも可能
    calories: 430,
    sugars: 53,
    caffeine: 100,
  }, // 末尾のカンマはなくてもよいが、書いたほうが良い。あとから書くと、追加の際にGitのログでその行も変更したという体になったりする
};
// 呼び出すときはオブジェクト名.キー名で呼び出す。再代入を行うときも同様
console.log(coffee.name);
coffee.isHot = false;
// 新しいキーを追加するときはいきなりオブジェクト名.新しいキー名で追加できる
coffee.barista = 'sk-birder';
console.log(coffee.barista);

// nullとundefined
// undefinedは初期化されていない変数などに代入？されている。ある意味エラーみたいなものと考えることもできる
// nullを使うのは「意図的に空にしている」と明示したいとき。undefinedだと明示的に空にしているかわからないため
// let hoge = undefined; // 基本的に使わない
let hoge = null;
console.log(hoge);

// typeof演算子
// Rubyの.classメソッドやJavaの.getClass()メソッドとは違う書き方
// 配列やnullの戻り値はobjectになる
console.log(typeof array);

// 関数宣言
// 書いてあるだけだと実行されない。仮引数(parameter)が0の場合も(parentheses)は省略できない
function add(num1, num2) {
  console.log(num1 + num2);
}
// 呼び出されて初めて実行される。な・ん・ど・で・も呼び出せる
// 引数(argument)の個数が少ないと足りない分はundefinedになる
add(1, 2);