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
{ function blockFunc() { return 'ブロックスコープ無し'}; };
console.log(blockFunc());
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