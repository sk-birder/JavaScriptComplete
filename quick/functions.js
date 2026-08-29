// 名前付きエクスポート
// importで呼び出せるようにするために、exportを記述
export function mul(a, b) {
  return a * b;
}
// 関数以外のものもexport出来る
let dataExternal = '外部のデータ';

// デフォルトエクスポート
// export defaultは1ファイルにつき1つだけ使える
export default 'hello.';