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

// while
// Javaとあまり変わらない。(parenthese)の中がTruthyのとき実行する
let count = 1;
while (count < 4) {
 console.log(`${count}回目のwhile処理やで。`);
 count++;
}

// do-while
// Javaとあまりry。(parenthese)の中がTruthyのとき実行する
// 最低1回は処理をしたいときに
count = 1;
do {
 console.log(`${count}回目のdo-while処理やで。`);
 count++;
} while (count < 4);

// for
// Javaとry。初期化式で宣言した変数のスコープはforブロックの内部だけ
// 初期化式と条件変化式、条件式をまとめて書ける。長い処理を繰り返すときに特に有効
// 初期化式と条件変化式は空文にできる。条件式を空文にするとTrue扱いになり無限ループする
// ---
// 初期化式は「最初に1回だけ実行する式」なので、ここにletを書かずに既存の変数を使うこともできる
// 同名のlet再宣言をすれば、シャドーイングの挙動になる
for (let count = 1 ; count < 10 ; count++) {
 console.log(`${count}回目のfor処理やで。`);
}
console.log(count);

// カンマ演算子
// 2つ以上の条件変化式を使いたい時に ※letやconstのカンマは演算子ではなくオプション
// 演算子の優先度は=よりも低い for文以外で使うことはほぼない
for (
  let i = 0, j = 0, k =0;
  (i + j + k) < 10;
  i += 1 , j += 2
) {
  // if .. k += 3;
}

// for-of
// 反復可能なオブジェクトに使える(高度な内容らしい)
// 配列に使用するのが基本。文字列にも使えるがほぼ使わない
const players = ['Ohtani', 'Yamamoto', 'Sasaki', 'Suzuki', 'Imanaga'];
// 初期化式はconstを使うのが基本。forブロック内部で書き換える必要がないため
for (const player of players) {
  console.log(player);
}
// 通常のfor文での書き方。やや冗長
for (let i = 0 ; i < players.length ; i++) {
  console.log(players[i]);
}

// for-in
// オブジェクトに使用可能。当然配列にも使えるが、配列はfor-ofを使うことが多い
const player0 ={
  name: 'Ohtani',
  heightCm: 193,
  team: 'LAD',
  hometown: 'Iwate'
}
for (const key in player0) {
  // inの左で初期化したものには各プロパティのキーが入る(配列では番号)
  console.log(key + ': ' + player0[key]);
  // playerA.keyだとundefinedが返る。.の右には変数名を使えないため
  // 配列呼び出しのようにplayerA[key]と書くと変数を使った値の呼び出しが可能
}