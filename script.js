function calculateProfitPrice() {
    const wholesalePrice = parseFloat(document.getElementById('wholesalePrice').value);
    const feePercentage = parseFloat(document.getElementById('feePercentage').value);
    const shippingCost = parseFloat(document.getElementById('shippingCost').value);

    if (isNaN(wholesalePrice) || isNaN(feePercentage) || isNaN(shippingCost)) {
        document.getElementById('result').innerText = 'すべてのフィールドに有効な数値を入力してください。';
        return;
    }

    const feeAmount = wholesalePrice * (feePercentage / 100);
    const totalCosts = feeAmount + shippingCost;
    const targetPrice = Math.floor((totalCosts / (1 - 0.30)) * 100) / 100; // 30%の利益を得るための価格

    document.getElementById('result').innerText = `利益価格: ¥${targetPrice}`;
    document.getElementById('calculations').innerText = `計算: 卸価格 - 手数料(${feeAmount}) - 送料(${shippingCost}) = ¥${targetPrice}`;
}
