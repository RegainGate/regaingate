// script.js
function calculate() {
    // 入力値の取得
    const wholesalePrice = parseFloat(document.getElementById("wholesalePrice").value);
    const feePercentage = parseFloat(document.getElementById("feePercentage").value);
    const shippingCost = parseFloat(document.getElementById("shippingCost").value);

    // 手数料の計算
    const feeAmount = (wholesalePrice * feePercentage) / 100;

    // 販売価格の計算
    const salesPrice = wholesalePrice - feeAmount - shippingCost;

    // 30%の利益を出すための目標価格
    const targetPrice = Math.floor(salesPrice * 1.3);

    // 計算式と結果の表示
    document.getElementById("formula").innerText = 
        `卸価格: ${wholesalePrice} - 手数料: ${feeAmount} - 送料: ${shippingCost} = 利益前販売価格: ${salesPrice}`;
    document.getElementById("finalPrice").innerText = 
        `最終販売価格 (30%の利益): ${targetPrice} 円`;
}
