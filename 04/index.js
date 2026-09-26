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
