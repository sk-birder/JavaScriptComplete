// IntersectionObserverはブラウザの機能(Node.jsなどでは使えない)
// これ自体はクラスで、第1引数にコールバック関数、第2引数にオブジェクトを渡せる
// ページの読込み時に必ず対象要素すべてに一度実行される

// 第1引数のコールバック関数には引数を1つ渡せる。この引数の中身は配列で状態を取得できる ここではisIntersectingを利用する
const observer = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-slide-animation'); // 対象の要素に指定したCSSクラスを付ける。クラス名はString型で指定
      observer.unobserve(entry.target); // IntersectionObserverの監視対象から外す。これをやらないとな・ん・ど・で・も実行される
    }
  }
}, { // ここからIntersectionObserverの第2引数
  threshold: 0.5 // 50%表示されたらコールバック関数を実行する
});

// こちらもブラウザの機能
// section要素を配列のようにして取得する
const sections = document.querySelectorAll('section');

// IntersectionObserverから作成したインスタンスにはobserveメソッドを使える
// 指定した要素の表示をチェックして、表示された時・消えた時に毎回コールバック関数を実行する
// observer.observe(sections[2]);
for (const section of sections) {
  observer.observe(section);
}