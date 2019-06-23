function start() {
    // Canvas要素を取得する
    var canvas = document.getElementById('canvas');
    if (!canvas) {
        console.log('Canvas要素の取得に失敗');
        return;
    }
    // 2Dグラフィックス描画用のコンテキストを取得する
    var context = canvas.getContext('2d');
    // 四角形を描画する
    context.fillRect(70,50,250,200);
}