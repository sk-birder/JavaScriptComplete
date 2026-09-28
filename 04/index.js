// if文
// Javaと同じ。ただし「等しい」ときは原則===を使うことに注意
let testNumber = -1;
if (testNumber === 0) {
  console.log('0やで。');
} else if (testNumber > 0) {
  console.log('0より大きいで。');
} else {
  console.log('0未満やな。');
}

// 同値演算子と等値演算子
// 同値演算子は型も含めて同じ時のみtrue
console.log(1 === '1'); // false
// 等値演算子は原則使わないようにする
console.log(1 == '1'); // Number型とString型だがtrueになる
console.log([] == ![]); // trueになる。なんでやねん。

// オブジェクトと同値演算子
const coffee1 = { name: 'Cafe Latte' };
const coffee2 = { name: 'Cafe Latte' };
// 以下の比較はfalseが返る
// 同値演算子は「同じオブジェクトを参照しているか」を比較するため
// 同じクラスから複数のインスタンスを生成した場合も同様
// Javascriptでは配列もオブジェクトの1種なので、配列も同様の挙動になる
console.log(coffee1 === coffee2);
// 以下のようなオブジェクト宣言をした場合、同値演算子はtrueを返す
coffee3 = coffee1;
console.log(coffee1 === coffee3);
// 2行上のオブジェクト宣言は「coffee1に別名をつける」程度のものと認識
// coffee3に属性を追加するとcoffee1にも追加される
coffee3.addSugar = true;
console.log(coffee1);
console.log(coffee3);

// Truty & Falsy
let likeBoolean;
console.log(likeBoolean);
if (likeBoolean) {
  console.log('Truthy');
} else {
  console.log('Falsy');
  // Falsy一例
  // undefined, null, 空のString, 数値の0, NaN
}

// 論理積とTruty / Falsy
// 左辺がTrutyなら右辺を、Falsyなら左辺をそのまま返す
console.log('1' && []); // 戻り値は空の配列
console.log(0 && []);   // 戻り値はNumber型の0

// 論理和とTruty / Falsy
// 左辺がTrutyなら左辺をそのまま返す。右辺の値や…真偽なぞ…どうでもよいのだ
// 左辺がFalsyなら左辺をそのまま返す
console.log('1' || []); // 戻り値はString型の1
console.log(0 || []);   // 戻り値は空の配列

// 論理和とTruty / Falsyの利用例
// ユーザー入力がないときにデフォルト値を入れる場合などに使える
const userInput = '';
const userName = userInput || 'DefaultName';
console.log(userName);

// NULL合体演算子 Nullish Coalescing
// 左辺がNullまたはUndefinedならば、右辺を返す
// 左辺がそれ以外ならば、左辺を返す。右辺の値や…真偽なぞ…どうでもよいのだ
let undefinedVaribable;
console.log(undefinedVaribable ?? []); // 戻り値はundefined
console.log(0 ?? []);                 // 戻り値はNumber型の0
// ANDやORと併用できない。(parentheses)で囲えば可能
// console.log('' ?? [] && true);      // エラーになる
console.log(0 ?? ( [] && true ));     // 戻り値はNumber型の0

// 否定
// Truthy / Falsyの値に使うとboolean型のfalse / trueが戻り値になる
console.log(!'1')  // false
console.log(!'')   // true
// 2つ重ねることもできる。Truthyならばtrueが、Falsyならfalseが返る
// 値のあるなしの判定に使えそう
console.log(!!'1') // true
console.log(!!'')  // false