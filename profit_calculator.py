def calculate_price(wholesale_price, fee_percentage, shipping_cost):
    # 手数料の計算
    fee_amount = wholesale_price * (fee_percentage / 100)
    print(f"手数料: {fee_amount}円")
    
    # 送料と手数料を差し引いたベース価格の計算
    base_price = wholesale_price - fee_amount - shipping_cost
    print(f"ベース価格 (手数料と送料を引いた後): {base_price}円")
    
    # 30%の利益が出る販売価格の計算
    target_price = base_price / 0.7  # 利益が30％ということは残りの70％がベース価格となる
    target_price = int(target_price)  # 小数点以下切り捨て
    print(f"30％の利益を確保する販売価格: {target_price}円")
    
    return target_price

# 入力例
卸価格 = float(input("卸価格を入力してください: "))
手数料率 = float(input("手数料率（％）を入力してください: "))
送料 = float(input("送料を入力してください: "))

# 計算実行
販売価格 = calculate_price(卸価格, 手数料率, 送料)
print(f"最終販売価格: {販売価格}円")
