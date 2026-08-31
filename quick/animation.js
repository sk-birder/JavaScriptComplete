// IntersectionObserverはブラウザの機能(Node.jsなどでは使えない)
// 引数にコールバック関数を渡せる
const observer = new IntersectionObserver(() => {});

// こちらもブラウザの機能
// section要素を配列のようにして取得する
const sections = document.querySelectorAll('section');

// IntersectionObserverから作成したインスタンスにはobserveメソッドを使える
// 指定した要素の表示をチェックして、表示された時・消えた時に毎回コールバック関数を実行する
// observer.observe();