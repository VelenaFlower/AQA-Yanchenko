import java.util.ArrayList;
import java.util.List;
import java.util.Random;

public class Task3 {

    public int[] getRandomArray() {
        Random random = new Random();
        int[] array = new int[30];
        for (int i = 0; i < array.length; i++) {
            array[i] = random.nextInt(99);
        }
       return array;
    }

    public void printList() {
        int [] numbers = getRandomArray();
        List<Integer> newList = new ArrayList<>();

        for (int number : numbers) {
            if (number % 3 == 0) {
                newList.add(number);
            }
        }
        System.out.println("Задание №3. " + newList);
    }
}
