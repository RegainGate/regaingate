document.getElementById("calculateButton").addEventListener("click", function() {
    // 入力値を取得
    const wholesalePrice = parseFloat(document.getElementById("wholesalePrice").value);
    const feePercentage = parseFloat(document.getElementById("feePercentage").value);
    const shippingCost = parseFloat(document.getElementById("shippingCost").value);

    // 1. 手数料を計算
    const feeAmount = wholesalePrice * (feePercentage / 100);
    document.getElementById("feeAmount").innerText = `手数料額: ${feeAmount.toFixed(2)}`;

    // 2. 手数料と送料を引いた後の価格を計算
    const netPrice = wholesalePrice - feeAmount - shippingCost;
    document.getElementById("netPrice").innerText = `手数料と送料を引いた後の価格: ${netPrice.toFixed(2)}`;

    // 3. 30%の利益を出すための販売価格を計算
    const targetPrice = netPrice / 0.7;
    document.getElementById("targetPrice").innerText = `利益30％の目標価格（小数点以下切り捨て前）: ${targetPrice.toFixed(2)}`;

    // 4. 小数点以下を切り捨てる
    const finalPrice = Math.floor(targetPrice);
    document.getElementById("finalPrice").innerText = `30％の利益が出る販売価格（小数点以下切り捨て後）: ${finalPrice}`;
});
