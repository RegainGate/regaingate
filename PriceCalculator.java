import java.util.Scanner;

public class PriceCalculator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // 入力を取得
        System.out.print("卸価格を入力してください: ");
        double wholesalePrice = scanner.nextDouble();

        System.out.print("手数料（%）を入力してください: ");
        double feePercentage = scanner.nextDouble();

        System.out.print("送料を入力してください: ");
        double shippingCost = scanner.nextDouble();

        // 手数料を計算
        double feeAmount = (feePercentage / 100) * wholesalePrice;

        // 残りの金額を計算
        double remainingAmount = wholesalePrice - feeAmount - shippingCost;

        // 30%の利益を加算
        double profitAmount = remainingAmount * 0.3;
        double finalPrice = remainingAmount + profitAmount;

        // 最終価格を小数点以下切り捨て
        int finalPriceRoundedDown = (int) Math.floor(finalPrice);

        // 結果を表示
        System.out.println("手数料: " + feeAmount);
        System.out.println("残りの金額: " + remainingAmount);
        System.out.println("30%の利益: " + profitAmount);
        System.out.println("最終価格（小数点以下切り捨て）: " + finalPriceRoundedDown);
        
        scanner.close();
    }
}
