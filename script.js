document.getElementById('calculateButton').addEventListener('click', function() {
    const wholesalePrice = parseFloat(document.getElementById('wholesalePrice').value);
    const feePercentage = parseFloat(document.getElementById('feePercentage').value) / 100;
    const shippingCost = parseFloat(document.getElementById('shippingCost').value);

    // 手数料額の計算
    const feeAmount = wholesalePrice * feePercentage;

    // 純利益の計算
    const netAmount = wholesalePrice - feeAmount - shippingCost;

    // 30%の利益を得るための販売価格を計算
    const sellingPrice = Math.floor(netAmount * 1.3); // 小数点以下切り捨て

    // 結果の表示
    document.getElementById('results').innerHTML = `
        <p>手数料額: ¥${Math.floor(feeAmount)}</p>
        <p>純利益: ¥${Math.floor(netAmount)}</p>
        <p>販売価格 (30%の利益): ¥${sellingPrice}</p>
    `;
});
