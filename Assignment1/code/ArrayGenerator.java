import java.util.Random;

public class ArrayGenerator {

    static Random random = new Random();

    // integer

    public static Integer[] randomIntArray(int size) {
        Integer[] array = new Integer[size];
        for (int i = 0; i < size; i++) {
            array[i] = random.nextInt(10000);
        }
        return array;
    }

    public static Integer[] sortedIntArray(int size) {
        Integer[] array = new Integer[size];
        for (int i = 0; i < size; i++) {
            array[i] = i;
        }
        return array;
    }

    public static Integer[] reverseSortedIntArray(int size) {
        Integer[] array = new Integer[size];
        for (int i = 0; i < size; i++) {
            array[i] = size - i;
        }
        return array;
    }

    // char

    public static Character[] randomCharArray(int size) {
        Character[] array = new Character[size];
        for (int i = 0; i < size; i++) {
            array[i] = (char) (random.nextInt(26) + 'a');
        }
        return array;
    }

    public static Character[] sortedCharArray(int size) {
        Character[] array = new Character[size];
        for (int i = 0; i < size; i++) {
            array[i] = (char) ('a' + i);
        }
        return array;
    }

    public static Character[] reverseSortedCharArray(int size) {
        Character[] array = new Character[size];
        for (int i = 0; i < size; i++) {
            array[i] = (char) ('a' + size - i);
        }
        return array;
    }

    // boolean

    public static Boolean[] randomBooleanArray(int size) {
        Boolean[] array = new Boolean[size];
        for (int i = 0; i < size; i++) {
            array[i] = random.nextBoolean();
        }
        return array;
    }

    public static Boolean[] sortedBooleanArray(int size) {
        Boolean[] array = new Boolean[size];
        for (int i = 0; i < size; i++) {
            array[i] = true;
        }
        return array;
    }

    public static Boolean[] reverseSortedBooleanArray(int size) {
        Boolean[] array = new Boolean[size];
        for (int i = 0; i < size; i++) {
            array[i] = false;
        }
        return array;
    }
}
