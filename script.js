document.getElementById("calculateBtn").addEventListener("click", function() {
    const wholesalePrice = parseFloat(document.getElementById("wholesalePrice").value);
    const feePercentage = parseFloat(document.getElementById("feePercentage").value);
    const shippingCost = parseFloat(document.getElementById("shippingCost").value);

    // 手数料計算
    const fee = (feePercentage / 100) * wholesalePrice;
    // 手数料と送料を引いた価格
    const netPrice = wholesalePrice - fee - shippingCost;
    // 30%の利益を考慮した最終価格
    const finalPrice = Math.floor(netPrice * 1.3); // 小数点以下切り捨て

    document.getElementById("result").innerHTML = `
        <p>手数料: ¥${Math.floor(fee)}</p>
        <p>手数料と送料を引いた価格: ¥${Math.floor(netPrice)}</p>
        <p>30%の利益を考慮した最終価格: ¥${finalPrice}</p>
    `;
});
