// Developer ToolsのConsole画面での表示
console.log(1); 

// 変数宣言
// 動的型付けで、違う型のデータを再代入することすら出来る。出来てしまう。
let hoge = 1;
console.log(hoge);  // Number型の1
hoge = '1';
console.log(hoge);  // String型の"1"
hoge = true;
console.log(hoge); 

// 定数宣言
// 定数は再代入が出来ない
const PI = 3.14;
// PI = 3.14159265; エラーになる

// String型の宣言の仕方
// 基本的な書き方。ただし現場次第
// 文字列内部にダブルクォーテーションがある場合は必然的にこの書き方
let userName = 'Sam';
// 文字列内部にシングルクォーテーションがある場合や、現場の規則次第でダブルクォーテーション
let greeting = "Hello, 'Sam'."
// 変数を呼び出す時はバッククォートを使う
// 変数の呼び出しには${}を使う
let message = `俺は${userName}だ。`;

// 配列
// Javaとは異なり、{Curl}ではなく[Bracket]で初期化する。また、各要素のデータ型は異なっても良い
let array = [ 'hoge', 'fuga', 'piyo', 1, 2, 3, true, false ];
// 配列の呼び出し方はJavaと全く同じ書き方。0番から始まるのも同様
console.log(array[0]);

// オブジェクト
// {Curl}で宣言するのは配列ではなくこれ。Rubyのハッシュに少し似ている
// バリューには変数も使用できる
let gender = 'male';
let result = {
  name: 'Sam',
  age: 40,
  gender, // gender: genderのようにキーとバリューが同じならこのように省略できる
  job: 'porter'
};
// 呼び出し方は2通り。基本的には上を使う
console.log(result.name);
console.log(result['age']);
// 再代入
result.name = 'Sam Bridges';
// プロパティの追加は、元のオブジェクトに存在しないキーをいきなり書いても良い
result.actor = 'Norman Reedus';

// undefinedとnull
// undefinedは初期化されていない変数や、オブジェクトの存在しないプロパティを呼び出した時
let uninitializedLet;
console.log('uninitializedLetの値は' + uninitializedLet);
console.log(result.name + 'のhobbyは' + result.hobby);
// nullは明示的に書かないと基本的に出てこない
let piyo = null;
console.log('piyoの値は' + piyo);

// if文
// Javaとほとんど同じ
let hogehoge = 3;
if (hogehoge > 3) {
  console.log('hogehogeは3より大きい');
} else if (hogehoge === 3) {
  console.log('hogehogeは3である');
} else {
  console.log('hogehogeは3より小さい');
}

// 条件式
// JavaScriptでは原則===と!==を使用する。データ型も含めて同一であるか確認される
let numberThree = 3;
let stringThree = '3';
console.log(numberThree !== stringThree);
// ==を使ったギャグと言うかホラーと言うか
console.log([] == ![]); // trueが返る…

// 三項演算子
// JavaやRubyとほとんど同じ
let testTernary = (numberThree === stringThree) ? '同じやで' : '違うで';
console.log(testTernary);

// switch文
// Javaとほぼ完全に同じ
let fruit = 'Apple';
switch (fruit) {
  case 'Apple':
    console.log('リンゴ');
    break;
  case 'Banana':
    console.log('バナナ');
    break;
  case 'Grape':
    console.log('ブドウ');
    break;
  default:
    console.log('どれでもないな');
}
// ブロックスコープをつけることも出来る。これはJavaでも同じ事が可能
// 「ブロック」なので、{Curl}の後ろに;を付けない
let vegetable = 'cucumber';
switch (vegetable) {
  case 'asparagus': {
    console.log('アスパラガス');
    break;
  }
  case 'beet': {
    console.log('ビート');
    break;
  }
  default: {
    console.log('どちらでもないな');
  }
}

// for文
// Javaとほぼ同じ
for (let i = 0 ; i < 10 ; i++) {
  console.log(i);
}
// 初期化式で宣言した変数のスコープはブロック内のみ。これもJavaと同じ
// console.log('iの値は' + i + 'やで'); // エラーになる

// for-of文
// ofの前はconstで宣言するのがお約束。どうしてもfor内部で書き換える場合ときはletを使うようだ
// constは毎回新しいものが用意されるくらいに考えておこう
let fruits = ['Apple', 'Banana', 'Cherry'];
for (const fruit of fruits) {
  console.log(fruit);
}
