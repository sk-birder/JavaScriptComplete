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
  }
  innerFunc101(); // ここでinnerFunc101を実行して初めてinnerFunc101用のレキシカル環境が構成される
}
outerFunc101(); // ここでouterFunc101を実行して初めてouterFunc101用のレキシカル環境が構成される

// 102 クロージャ 複雑な関数におけるレキシカル環境
