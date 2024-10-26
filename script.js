document.getElementById("calculateBtn").addEventListener("click", function() {
    const wholesalePrice = parseFloat(document.getElementById("wholesalePrice").value);
    const feePercentage = parseFloat(document.getElementById("feePercentage").value);
    const shippingCost = parseFloat(document.getElementById("shippingCost").value);

    // 手数料の計算
    const fee = (wholesalePrice * feePercentage) / 100;

    // 純利益の計算
    const netProfit = wholesalePrice - fee - shippingCost;

    // 最終販売価格の計算
    const finalPrice = Math.floor(netProfit * 1.3); // 30%の利益を加算し、切り捨て

    // 結果の表示
    document.getElementById("finalPrice").innerText = `販売金額: ${finalPrice} 円`;
    document.getElementById("intermediateCalculations").innerText = `
        手数料: ${fee} 円
        純利益: ${netProfit} 円
        最終販売金額: ${finalPrice} 円
    `;
});
