import java.util.Scanner;

public class Task2 {

    public void sayHelloName() {
        Scanner scan = new Scanner(System.in);
        System.out.print("Введите свое имя: ");
        String name = scan.nextLine();

        String baseName = "Вячеслав";
        if (name.equals(baseName)) {
            System.out.println("Привет, Вячеслав");
        } else {
            System.out.println("Нет такого имени");
        }
    }
}
