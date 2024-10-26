document.getElementById("calculateButton").addEventListener("click", function() {
    // 入力値を取得
    const wholesalePrice = Math.floor(parseFloat(document.getElementById("wholesalePrice").value) || 0);
    const feePercentage = Math.floor(parseFloat(document.getElementById("fee").value) || 0);
    const shippingFee = Math.floor(parseFloat(document.getElementById("shippingFee").value) || 0);

    // 卸価格の130%を計算
    const targetAmount = Math.floor(wholesalePrice * 1.3);

    // 手数料をパーセンテージから計算
    const feeAmount = Math.floor((feePercentage / 100) * wholesalePrice);

    // 必要な販売価格の計算
    const requiredSellingPrice = targetAmount + feeAmount + shippingFee;

    // 結果を表示
    document.getElementById("sellingPrice").textContent = requiredSellingPrice + " 円";

    // 途中経過を表示
    document.getElementById("targetAmount").textContent = `卸価格の130%: ${targetAmount} 円`;
    document.getElementById("feeAmount").textContent = `手数料: ${feeAmount} 円`;
    document.getElementById("totalAmount").textContent = `必要な販売価格: ${requiredSellingPrice} 円`;
});
