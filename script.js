function calculatePrice() {
    const wholesalePrice = parseFloat(document.getElementById("wholesalePrice").value);
    const feePercentage = parseFloat(document.getElementById("feePercentage").value) / 100;
    const shippingCost = parseFloat(document.getElementById("shippingCost").value);
    
    if (isNaN(wholesalePrice) || isNaN(feePercentage) || isNaN(shippingCost)) {
        alert("すべてのフィールドに正しい値を入力してください。");
        return;
    }

    // 手数料と送料を計算
    const feeAmount = wholesalePrice * feePercentage;
    const netAmount = wholesalePrice - feeAmount - shippingCost;

    // 30%の利益を加えた販売金額を計算
    const sellingPrice = Math.floor(netAmount * 1.3); // 小数点以下切り捨て

    // 結果を表示
    document.getElementById("result").innerText = `販売金額: ¥${sellingPrice}`;
    document.getElementById("calculations").innerHTML = `
        <p>卸価格: ¥${wholesalePrice}</p>
        <p>手数料: ¥${feeAmount.toFixed(2)}</p>
        <p>送料: ¥${shippingCost}</p>
        <p>手数料と送料を引いた金額: ¥${netAmount.toFixed(2)}</p>
        <p>30%の利益を加えた販売金額: ¥${sellingPrice}</p>
    `;
}
