function calculateProfit() {
    // 入力値を取得
    let sellingPrice = document.getElementById("sellingPrice").value;
    let shippingCost = document.getElementById("shippingCost").value;

    // 手数料を計算 (10%)
    let fee = Math.floor(sellingPrice * 0.10);

    // 利益額を計算
    let profit = Math.floor(sellingPrice - fee - shippingCost);

    // 結果を表示
    document.getElementById("fee").textContent = fee;
    document.getElementById("profit").textContent = profit;
}
