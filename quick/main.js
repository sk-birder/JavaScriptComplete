// Developer ToolsのConsole画面での表示
console.log(1); 

// 変数宣言
// 動的型付けで、違う型のデータを再代入することすら出来る。出来てしまう。
let hoge = 1;
console.log(hoge);  // int型の1
hoge = '1';
console.log(hoge);  // string型の"1"
hoge = true;
console.log(hoge); 

// 定数宣言
// 定数は再代入が出来ない
const PI = 3.14;
// PI = 3.14159265; エラーになる
