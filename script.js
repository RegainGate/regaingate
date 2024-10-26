function calculateSellingPrice() {
    const wholesalePrice = parseFloat(document.getElementById("wholesalePrice").value);
    const feePercentage = parseFloat(document.getElementById("fee").value);
    const shippingFee = parseFloat(document.getElementById("shippingFee").value);

    // 卸価格の130%を計算
    const targetAmount = wholesalePrice * 1.3;

    // 手数料をパーセンテージから計算
    const feeAmount = (feePercentage / 100) * wholesalePrice;

    // 必要な販売価格の計算
    const requiredSellingPrice = targetAmount + feeAmount + shippingFee;

    // 結果を表示
    document.getElementById("sellingPrice").textContent = requiredSellingPrice.toFixed(2) + " 円";

    // 途中経過を表示
    document.getElementById("targetAmount").textContent = `卸価格の130%: ${targetAmount.toFixed(2)} 円`;
    document.getElementById("feeAmount").textContent = `手数料: ${feeAmount.toFixed(2)} 円`;
    document.getElementById("totalAmount").textContent = `必要な販売価格: ${requiredSellingPrice.toFixed(2)} 円`;
}
