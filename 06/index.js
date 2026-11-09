// 'use strict'; // Lesson 95に登場するもの(後述)
console.log(hoistingMessage);       // lesson93のvar呼び出し。undefinedになる
console.dir(globalThis.greeting94); // lesson94のfunction呼び出し。こちらは初期値ごと巻き上げられる

// 92 グローバルオブジェクト
// おおまかに、ECMAscryptに定義されたもの、Chromeなどブラウザが追加したもの、Node.jsが追加したものに分かれる
// globalThisでアクセス可能。ブラウザでもNode.jsでも使用できる
console.log(globalThis);
// consoleもglobalThisのオブジェクトの1つ
// console.logはconsoleオブジェクトのlogメソッドを実行している、ということ
console.dir(console);

// globalThisにはオブジェクトを追加したり、オーバーライドすることができる
// 追加はグローバル変数的な使い方ができる
globalThis.lesson92 = '追加したものです。';
console.log(lesson92);
// オーバーライドはあまり行わないほうが良い
// globalThis.alert = mes => `オーバーライドしたものです。本来はダイアログに「${mes}」と表示されます。`;
// console.log(alert('アラートやで～'));

// ESの仕様書には最低限のものが定義されている(URLはMDNのページ)
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference

// ブラウザで追加しているものはMDNのWeb APIのページに記載
// https://developer.mozilla.org/ja/docs/Web/API/Window
// alertなどはNode.jsでは使えない

// Node.jsは以下のページに記載(最新版のURL)
// https://nodejs.org/docs/latest/api/globals.html

// ブラウザでは以下の単語でもglobalオブジェクトを呼び出せる
// 機能的には少し異なる by ChatGPT
console.log(window);
console.log(self);
console.log(frames);
// Node.jsではglobalでも呼び出せる(ブラウザでは不可)
// console.log(global);


// 93 varとlet
// letとconstはES 2015で定義されたもの。ここではletとvarについて比較する
// 違い1 同じ名前で再宣言できる
var greeting = 'Hello';
var greeting = 'Hi';

// 違い2 関数以外で宣言するとブロックスコープ無し(グローバルオブジェクトになる)
// 厳格モードにおける関数(後述)と異なり、厳格モードでもグローバルスコープになる
{ var text93 = 'message' };
console.log(text93); // letやconstだとエラーになる
// 関数内で宣言するとスコープを持つ。これを関数スコープという
function func93() {
  var funcText93 = 'hoge';
  return funcText93;
}
console.log(func93());
// console.log(funcText93); // is not definedエラーになる

// 違い3 varで宣言するとグローバルオブジェクトの1つになる
// ただし、関数内での宣言を除く
console.dir(globalThis.greeting);
console.dir(globalThis.funcText93); // undefined

// 違い4 varにはホイスティング(巻き上げ)がある
// ただし巻き上げられるのは宣言だけ。初期値は巻き上げられない
var hoistingMessage = 'var宣言のメッセージ';
// 内部的には以下のようになっている
// var hoistingMessage;                    // これが巻き上げられて
// hoistingMessage = 'var宣言のメッセージ'; // その後これが実行される
console.log(hoistingMessage);


// 94 関数宣言とvarの似ている点
// 関数宣言はES 2015以前にもあるため、varに似た部分がある
// 再宣言ができる
function greeting94() { return 'Hello.' };
console.log(greeting94()); // Hello.ではなくHiになる。巻き上げられるため
function greeting94() { return 'Hi.' };
console.log(greeting94()); // Hi.

// ブロックスコープはないが、関数スコープはある
// ※厳格モードではブロックスコープになる
{ function blockFunc() { return 'ブロックスコープ無し'}; };
console.log(blockFunc()); // use strictではエラーになる
function func94() {
  function funcInFunc() {
    return 'hoge';
  }
  return 'fuga';
}
console.log(func94());
// console.log(funcInFunc()); // in not definedエラーになる

// グローバルオブジェクトになる
console.dir(globalThis.greeting94);

// ホイスティングがある
// varと違い、初期値ごと巻き上げられる。後方互換性のためにこの仕様が生きている
// 後方互換性を担保したままブロックスコープなどを使用するための仕組みがuse strict

// 95 use strictディレクティブ(厳格モード)
// strict (adj) 厳しい、厳格な、厳密な 
// 過去のコードを動くようにしつつ、言語の不備を補うもの。過去の緩いルールから、現在の厳しいルールを強制する
// ファイルの先頭'use strict';と記述する。これより前に書けるのはコメントだけ
// 複数のスクリプトを使用する場合、適用する全てのスクリプトの先頭に記述する必要がある

// 関数内のみ適用することも可能
function func95()  {
  // 'use strict';
  x = 1; // 未宣言変数への代入は厳格モードにおいてエラーになる。letやconstを使う必要がある
  return x;
}
console.log(func95());

// 厳格モードではない場合、ブロック内で宣言された関数の挙動はブラウザごとに異なる
// Chromeの場合はブロックの前ではundefinedに、ブロックが実行された後は関数が宣言される
console.dir(blockFunc95); // undefined
if (true) {
  function blockFunc95() {
    'こんな関数宣言、したらあかんで～。';
  }
}
console.dir(blockFunc95); // 上のif文が実行されなかったときはundefinedになる

// 厳格モードでも同じ名前の関数の再宣言はできる
// モジュール(ここでは触れない)を使うときはletなどと同様に再宣言できなくなる
function sameFunc() {return 'hoge';}
function sameFunc() {return 'fuga';}
console.log(sameFunc()); // 厳格モードでもエラーにならず、fugaが返る

// 96 primitiveとobject
// 基本型と参照型(reference)と言うこともある
// Javascriptにおいては「オブジェクト」「配列」「関数」がobject。それ以外の全てがprimitive
// 変数に代入されたときの動きが異なる

// primitiveの場合、メモリに直接、値が書き込まれる
let a = 1;
let b = 2;
a = b;
console.log(a); // 2

// objectの場合、メモリに書き込まれるのは「オブジェクト本体のアドレス」
// objectはサイズが大きいため、いちいちコピーするよりこちらのほうが効率的なため
let objA = { message: 'Aやで。' };
let objB = { message: 'Bです。' };
console.log(objA.message); // Aやで
console.log(objB.message); // Bです
// 以下の操作で渡されるのは「アドレス」なので、両方同じものを参照することになるため
objA = objB;
// objBを書き換えると
objB.message = 'Cなのだ。';
// 両方書き換わる
console.log(objA.message); // Cなのだ
console.log(objB.message); // Cなのだ

// 同じ内容のオブジェクトでも、アドレスが異なれば同値演算子はfalseを返す
const objX = { message: '同じ内容のオブジェクト' };
const objY = { message: '同じ内容のオブジェクト' };
console.log(objX === objY); // false

// constは再代入を封じるだけ
// primitiveならば不変になるが、objectは「アドレスを指定している」だけなので、object本体の操作は可能のまま
// objectにおいては「const＝不変」と考えてはいけない
// constなのに内容が変わるこの性質を可変性mutbale(adj. 変わりやすい)と言う。対義語はimmutable(adj. 不変の)
const objZ = { name: 'Z' };
// objZ = objX; // 再代入は出来ない
objZ.name = 'ゼット';
objZ.message = '追加';
console.log(objZ); // 内容の書き換えや追加は出来る

// 96 GC
// Javascriptではガベージコレクターが自動で行ってくれる
let obj96A = {message: '使われません'};
let obj96B = {message: 'hoge'};
obj96A = obj96B; // この時点でobj96Aのオブジェクトにはアクセス不可能になるため、GC対象になる
