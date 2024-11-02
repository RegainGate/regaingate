function calculateProfit() {
    // 入力値を取得
    const sellingPrice = parseFloat(document.getElementById("sellingPrice").value);
    const shippingCost = parseFloat(document.getElementById("shippingCost").value);
    const purchasePrice = parseFloat(document.getElementById("purchasePrice").value);
    
    // 手数料（販売価格の10%）
    const fee = Math.floor(sellingPrice * 0.10);
    
    // 利益額の計算
    const profit = Math.floor(sellingPrice - fee - shippingCost - purchasePrice);
    
    // 結果を表示
    document.getElementById("fee").textContent = fee;
    document.getElementById("profit").textContent = profit;
}
