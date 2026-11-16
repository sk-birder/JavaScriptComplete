// 100 レキシカル環境(LexicalEnvironment)
// 現在は環境レコード(EnvironmentRecord)と言う
// ESの定義書にあるもので、環境ごとに挙動は異なる模様

// 特にブロックを書かない、一番外のレキシカル環境
let apple100 = 'apple';

// ブロックを宣言。別のレキシカル環境がメモリ上に確保される
{
  // 親となるレキシカル環境のアドレスがouterEnvとして記録される
  let banana100 = 'banana';
  console.log(banana100); // 現在のレキシカル環境を探して、あればそれを返す
  console.log(apple100);  // 現在のレキシカル環境を探して見つからなければouterEnvまで探しに行く
  {
    // 更にブロックを作れば、別のレキシカル環境が確保される
    let cherry = 'cherry';
  }
  // console.log(cherry); //cherryを宣言したブロックは親ではなく子なので、is not definedエラーになる
}


// 101 単純な関数におけるレキシカル環境
// 関数を宣言した時点でベースのレキシカル環境に作られるのは「関数用のオブジェクト」だけ
// 実行する時にその関数用のレキシカル環境が構成される
let apple101 = 'りんご';
let outerFunc101 = () => {
  let banana101 = 'バナナ';
  let innerFunc101 = () => {
    let cherry101 = 'さくらんぼ';
  };
  innerFunc101(); // ここでinnerFunc101を実行して初めてinnerFunc101用のレキシカル環境が構成される
};
outerFunc101(); // ここでouterFunc101を実行して初めてouterFunc101用のレキシカル環境が構成される

// 102 クロージャ 複雑な関数におけるレキシカル環境
// 関数の中で宣言された関数が属するレキシカル環境は、親となる関数のものになる
// それぞれの関数オブジェクトには[[Environment]]というプロパティがあり、どのレキシカル環境に属するかを記録している
// クロージャ：外部の変数の情報を持った関数のこと
// (´・ω・｀)全体にやや不正確な内容です…
const outerFunc102 = () => {
  let fruit102 = 'pear';
  return () => {
    console.log(fruit102); // どこで呼び出しても参照可能。innerFunc102はouterFunc102のレキシカル環境にあるため
  };
};
const innerFunc102 = outerFunc102(); // 右辺でouterFunc102のレキシカル環境が構成される
innerFunc102();


// 103 レキシカル環境の3つの注意点
// 1 レキシカル環境はアドレスのように指定されている
// ESでは多言語にあるようなスナップショット的挙動にはならない。よくわからん。
let fruit103 = 'orange';
const func103 = () => {
  console.log(fruit103); // ESにおいてはここでスナップショットを作成する挙動ではない
};
fruit103 = 'melon'; // 再代入すると
func103();          // その値になる

// 2 関数を複数回実行すると、その度にレキシカル環境が作られる
func103(); // 3行上のものとは別のレキシカル環境が作られる

// 3 理論上、レキシカル環境はいつまでも残り続ける
const createCounter = () => {
  let count = 0;
  return () => {
    count += 1;
    console.log(count);
  };
};
// 以下の呼び出しでcreateCounterのレキシカル環境が作られる
let counter = createCounter();
counter(); // 1が表示される。console.logで表示されるcountはcreateCounterのレキシカル環境にある
counter(); // 2が表示される。1つ上のものと違うレキシカル環境が作られるが、countがcreateCounterのレキシカル環境にあることは変わらない


// 104 クロージャを使ってプライベート関数を作る
// 通常、レキシカル環境は「内側から外側へ」しか参照できないが、
// 関数をreturnしてクロージャを利用すれば、外部からメソッドを通じて読み取り、書き出しが可能になる
const generatePerson = (inputName, inputAge) => {
  // 以下の代入はメソッド呼び出しの際は実行されない
  let age = inputAge;
  
  return {
    // name: inputName,  // この書き方だと外から普通に書き換えられてしまう
    // age: age,         // この書き方だと外から普通に書き換えられてしまう

    // メソッドを使えば、呼び出しだけ出来るようにしたり
    getName: () => inputName,
    getAge: () => age,
    // メソッドを呼び出さない限り外からの書き換えが出来ないようにできる
    incrementAge: () => {
      age += 1;
    },
  };
};

// クラス宣言をしていないが、インスタンス生成のような扱い方ができる
const akane = generatePerson('Akane', 16);
const aoi = generatePerson('Aoi', 15);

// それぞれnameとageは別のレキシカル環境に保持される
console.log(akane.getName() + 'の年齢は' + akane.getAge() + '歳'); // 16歳
console.log(aoi.getName() + 'の年齢は' + aoi.getAge() + '歳');     // 15歳

// 書き換えを行った場合も他方に影響はない
aoi.incrementAge();
console.log(akane.getName() + 'の年齢は' + akane.getAge() + '歳'); // 16歳
console.log(aoi.getName() + 'の年齢は' + aoi.getAge() + '歳');     // 16歳

// generatePersonのようにオブジェクトを生成して返す関数は、ファクトリ関数（Factory Function） と呼ばれる by ChatGPT

