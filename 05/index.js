// 79. 関数はオブジェクトである
// 以下の記述ではaddという変数宣言と、オブジェクトの代入を行っている
function add(a, b) {
  return a + b;
}
console.log(typeof add); // 戻り値はfunction
console.dir(add);        // objectで返される
console.log(add.name);   // 関数名
console.log(add.length); // parameterの個数
// 関数オブジェクト
const newAdd = add;
console.log(newAdd(3, 4));

// オブジェクトから関数を作ることは出来ない
// JSエンジンが内部的に作るプロパティを持つことによって関数たり得るため
// let funcObj = { .. };
// funcObj();  // できない


// 80. 関数式
// 式が必要なところに書かれた関数宣言のこと。functionの右の関数名は省略できる
// 関数名を書いた関数式を名前付き関数式、書かない関数式を無名関数(anonymous function)という
// 79の関数宣言と異なり、ここのfunctionはオブジェクトを作っているだけ
const func80 = function () {
  return 'eighty';
};
console.log(func80());

// 81. 関数宣言と関数式
// 関数宣言は巻き上げられるが、関数式は巻き上げられない

// 82. メソッド
// オブジェクトのプロパティにあるバリューに記述された関数のこと
// 以下の例ではsayHiメソッドと呼ばれる
const person1 = {
  name: 'sk-birder',
  sayHi: function () {
    return 'Hi';
  }
};
// 呼び出し方はRubyと似ている
console.log(person1.sayHi());

// 83. アロー関数
// 特徴1 1つの式だけならreturnと{Curl}を省略できる
let arrow831 = (name) => {
  return `Hi, ${name}!`;
};
// 上記の3行は以下のように書き換えることができる
arrow831 = (name) => `Hi, ${name}!`;
// どちらを使っても同じ結果になる
console.log(arrow831('sk-birder'));

// 特徴2 parameterが1つだけのときは(parentheses)を省略できる
let arrow832 = name => `Hello, ${name}!`;
console.log(arrow832('sk-birder'));

// 特徴3 thisの挙動が異なる
// ここでは説明無し
// thisの挙動の差が関係ないのであれば、無名関数とアロー関数のどちらを使っても良い

// アロー関数でオブジェクトをreturnしたいとき
// {Curl}の外に(parenthese)──ここでは演算子扱い──を書く
const arrow834 = (text) => ({
  text: text
});
console.log(arrow834('hoge'));
