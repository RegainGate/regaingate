def calculate_price(wholesale_price, fee_percentage, shipping_cost):
    # 手数料の計算
    fee_amount = wholesale_price * (fee_percentage / 100)
    print(f"手数料: {fee_amount:.2f}円")
    
    # 送料と手数料を差し引いたベース価格の計算
    base_price = wholesale_price - fee_amount - shipping_cost
    print(f"ベース価格 (手数料と送料を引いた後): {base_price:.2f}円")
    
    # 30%の利益が出る販売価格の計算
    if base_price <= 0:
        print("エラー: ベース価格が0以下です。適切な値を入力してください。")
        return None
    
    target_price = base_price / 0.7  # 利益が30％ということは残りの70％がベース価格となる
    target_price = int(target_price)  # 小数点以下切り捨て
    print(f"30％の利益を確保する販売価格: {target_price}円")
    
    return target_price

# 入力例
try:
    wholesale_price = float(input("卸価格を入力してください: "))
    fee_percentage = float(input("手数料率（％）を入力してください: "))
    shipping_cost = float(input("送料を入力してください: "))

    # 計算実行
    sale_price = calculate_price(wholesale_price, fee_percentage, shipping_cost)
    if sale_price is not None:
        print(f"最終販売価格: {sale_price}円")
except ValueError:
    print("エラー: 数字を入力してください。")
