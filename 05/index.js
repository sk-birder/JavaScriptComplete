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
// ただしデフォルトパラメーターやレストパラメーター(後述)を設定する場合は省略できない
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

// 84 デフォルトパラメーター
// 引数が渡されなかったときおよびundefinedが渡された時に使われる値のこと
// nullや0(Falsy)のときはそちら優先
// 下記の例ではString型のUserのこと
function basicFunc84(name = 'User') {
  console.log(`Hi, ${name}.`);
}
basicFunc84(null);

// 複数のパラメーターを設定するときは、デフォルトパラメーターをもつパラメーターは後ろに書く方が良い
// 良い例
const betterFunc84 = (name, message ='Nice to meet you') => `Hello, ${name}! ${message}.`;
console.log(betterFunc84('sk-birder')); // 引数が1個だけの場合、2個目はundefinedとして扱われエラーにならない
// 悪い例
const badFunc84 = (name = 'Taro', message) => `Hello, ${name}! ${message}.`;
console.log(badFunc84(undefined, 'welcome')); // デフォルトを使うときわざわざundefinedを書くハメになる

// 複数のパラメーターがあるとき、2個目以降のパラメータは前のパラメータを参照できる
const function84 = (name, message = `Hi, ${name}.`) => message;
console.log(function84());
// パラメータを過剰に渡した場合は無視される
console.log(function84('Taro', 'Jiro', 'Ohmura', 'Shiro'));

// 85 レストパラメーター
// Rest parameter. restとは残ったもののこと。ES6(2015)以降の比較的新しい書き方
// periodを3つ書くと、指定した位置以降のパラメーターを配列にして取得できる
// レストパラメーターは(parentheses)内部の最後に書かないとエラーになる
const func85 = (name, message, ...nums) => {
  console.log(nums);
  let total = 0;
  for (const num of nums) {
    total += num;
  }
  return name + 'が入れた数字の合計は' + total + '。' + message;
}
console.log(func85('猫', 'ヨシ！', 1, 3, 5, 7, 9));

// レストパラメーターのない時代の書き方
// argumentsを使用するが、これはアロー関数では使用できない(argumentsオブジェクトを持たないため)
// 関数宣言、名前付き関数式、無名関数で使用可能
function oldFunc85() {
  console.log(arguments);
  let total = 0;
  for (const num of arguments) {
    total += num;
  }
  return total;
}
console.log(oldFunc85(1, 3, 5, 7, 9));             // 合計値が返される
console.log(func85('猫', 'ヨシ！', 1, 3, 5, 7, 9)); // こちらは文字列結合で返される
