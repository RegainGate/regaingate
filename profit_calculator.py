# profit_calculator.py

import math

# 入力を促す
print("卸価格を入力してください（例: 1000）：")
wholesale_price = float(input("卸価格: "))

print("手数料の割合を％で入力してください（例: 5）：")
fee_percentage = float(input("手数料（％）: "))

print("送料を入力してください（例: 200）：")
shipping_cost = float(input("送料: "))

# 1. 手数料を計算
fee_amount = wholesale_price * (fee_percentage / 100)
print(f"手数料額: {fee_amount}")

# 2. 手数料と送料を引いた後の価格を計算
net_price = wholesale_price - fee_amount - shipping_cost
print(f"手数料と送料を引いた後の価格: {net_price}")

# 3. 30%の利益を出すための販売価格を計算
target_price = net_price / 0.7
print(f"利益30％の目標価格（小数点以下切り捨て前）: {target_price}")

# 4. 小数点以下を切り捨てる
final_price = math.floor(target_price)
print(f"30％の利益が出る販売価格（小数点以下切り捨て後）: {final_price}")
