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
