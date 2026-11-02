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