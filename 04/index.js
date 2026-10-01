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

// Truthy & Falsy
let likeBoolean;
console.log(likeBoolean);
if (likeBoolean) {
  console.log('Truthy');
} else {
  console.log('Falsy');
  // Falsy一例
  // undefined, null, 空のString, 数値の0, NaN
}

// 論理積とTruthy / Falsy
// 左辺がTruthyなら右辺を、Falsyなら左辺をそのまま返す
console.log('1' && []); // 戻り値は空の配列
console.log(0 && []);   // 戻り値はNumber型の0

// 論理和とTruthy / Falsy
// 左辺がTruthyなら左辺をそのまま返す。右辺の値や…真偽なぞ…どうでもよいのだ
// 左辺がFalsyなら左辺をそのまま返す
console.log('1' || []); // 戻り値はString型の1
console.log(0 || []);   // 戻り値は空の配列

// 論理和とTruthy / Falsyの利用例
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

// 三項演算子
// Javaとほぼ同じだが、Truthy / Falsyでも使える
const ternary = undefinedVaribable ? 'Trueやな' : 'Falseやで';
console.log(ternary);

// swtich文
function vegetableColor(vegetable) {
  switch (vegetable) {
    // caseにおける判定は===と同様に行われる。==ではない
    // let message; // エラーになる。ここでlet宣言は出来ない
    case 'tomato': {
      const message = 'red'; // 各caseはブロックにしなくても動作するが、変数・定数の宣言はブロック内で行わないと多重定義エラーになる
      console.log(message);
      break; // 関数内ならばreturnでも同様のことができる
    }
    case 'radish': // 意図的にbreakを記述しないことで、複数条件や複数処理を与えることができる
    case 'onion': {
      const message = 'white';
      console.log(message);
      break;
    }
    default: {// defaultを書かないと、条件を満たさない場合なにも行われない
    const message = 'not found';
      console.log(message);
      break; // 書かずとも問題ないが書いておこう
    }
  }
}
vegetableColor('radish');