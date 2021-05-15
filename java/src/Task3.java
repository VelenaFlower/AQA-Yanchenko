public class Task3 {

    public void getNumbers() {
        int[] array = { 1, 6, 3, 67, 21, 57, 15, 66, 23, 14, 72 };
        for (int j : array) {
            if (j % 3 == 0) {
                System.out.println(j);
            }
        }
    }
}
