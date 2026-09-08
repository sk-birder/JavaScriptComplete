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