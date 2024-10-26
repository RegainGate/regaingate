document.getElementById("calculateButton").addEventListener("click", function() {
    // 入力値を取得
    const wholesalePrice = Math.floor(parseFloat(document.getElementById("wholesalePrice").value) || 0);
    const feePercentage = Math.floor(parseFloat(document.getElementById("fee").value) || 0);
    const shippingFee = Math.floor(parseFloat(document.getElementById("shippingFee").value) || 0);

    // 売上総利益を計算
    const grossProfit = Math.floor(wholesalePrice * 1.3);

    // 売上総利益と送料の合計を計算
    const totalWithShipping = grossProfit + shippingFee;

    // 手数料を含む必要な販売価格の計算
    const sellingPrice = Math.floor(totalWithShipping / (1 - (feePercentage / 100)));

    // 手数料を計算
    const feeAmount = Math.floor(sellingPrice * (feePercentage / 100));

    // 必要な販売価格を求める
    const requiredSellingPrice = sellingPrice + feeAmount;

    // 結果を表示
    document.getElementById("sellingPrice").textContent = requiredSellingPrice + " 円";

    // 途中経過を表示
    document.getElementById("grossProfit").textContent = `売上総利益 (卸価格 × 1.3): ${grossProfit} 円`;
    document.getElementById("totalWithShipping").textContent = `売上総利益 ＋ 送料: ${totalWithShipping} 円`;
    document.getElementById("feeAmount").textContent = `手数料: ${feeAmount} 円`;
});
