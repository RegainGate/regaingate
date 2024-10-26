function calculatePrice() {
    const wholesalePrice = parseFloat(document.getElementById("wholesalePrice").value);
    const feePercentage = parseFloat(document.getElementById("feePercentage").value) / 100;
    const shippingCost = parseFloat(document.getElementById("shippingCost").value);

    if (isNaN(wholesalePrice) || isNaN(feePercentage) || isNaN(shippingCost)) {
        alert("全ての値を正しく入力してください。");
        return;
    }

    // 手数料の計算
    const feeAmount = wholesalePrice * feePercentage;

    // 合計コスト
    const totalCost = wholesalePrice - feeAmount + shippingCost;

    // 30%利益を乗せた価格を計算
    const profitPrice = Math.floor(totalCost * 1.3);

    // 結果の表示 (途中計算式付き)
    document.getElementById("result").innerHTML = `
        <p>卸価格: ${wholesalePrice}円</p>
        <p>手数料 (${feePercentage * 100}%): ${feeAmount.toFixed(2)}円</p>
        <p>送料: ${shippingCost}円</p>
        <p>計算式: 卸価格 - 手数料 + 送料 = 合計コスト</p>
        <p>計算式に当てはめると: ${wholesalePrice} - ${feeAmount.toFixed(2)} + ${shippingCost} = ${totalCost.toFixed(2)}円</p>
        <p>30%利益計算式: 合計コスト × 1.3 = ${totalCost.toFixed(2)} × 1.3 = ${profitPrice}円</p>
        <h2>30%利益価格: ${profitPrice}円</h2>
    `;
}