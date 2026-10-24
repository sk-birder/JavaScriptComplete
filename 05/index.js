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



// アロー関数思い出し
const arrowFunc = a => {
  return a ** 2;
};
console.log(arrowFunc(2));
