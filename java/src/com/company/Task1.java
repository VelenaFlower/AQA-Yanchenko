package com.company;

import java.util.Scanner;

public class Task1 {

    public void sayHello() {
        Scanner scan = new Scanner(System.in);
        System.out.print("Введите любое целое число: ");
        int number = scan.nextInt();

        if (number > 7) {
        System.out.println("Привет");
        }
    }
}
