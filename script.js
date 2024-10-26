document.getElementById('calculateButton').addEventListener('click', function() {
    const wholesalePrice = parseFloat(document.getElementById('wholesalePrice').value);
    const feePercentage = parseFloat(document.getElementById('feePercentage').value) / 100;
    const shippingCost = parseFloat(document.getElementById('shippingCost').value);

    const profitTarget = wholesalePrice * 0.30; // 30%の利益
    const targetSales = wholesalePrice + profitTarget; // 6500円
    const netSales = targetSales - shippingCost; // 送料を引いた後の売上

    // 手数料を考慮した販売価格の計算
    const sellingPrice = Math.floor(netSales / (1 - feePercentage)); // 小数点以下切り捨て

    // 結果を表示
    document.getElementById('result').textContent = `販売価格: ${sellingPrice}円`;
    document.getElementById('calculationDetails').innerHTML = `
        <strong>計算過程:</strong><br>
        30%の利益: ${profitTarget.toFixed(0)}円<br>
        目標売上: ${targetSales.toFixed(0)}円<br>
        送料を引いた後の売上: ${netSales.toFixed(0)}円<br>
        必要な販売価格: ${sellingPrice}円
    `;
});
