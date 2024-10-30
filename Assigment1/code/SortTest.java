import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Random;

public class SortTest {

    public static Integer[] generateRandomIntArray(int size) {
        Random random = new Random();
        Integer[] array = new Integer[size];
        for (int i = 0; i < size; i++) {
            array[i] = random.nextInt(10000);
        }
        return array;
    }

    public static Integer[] generateSortedIntArray(int size) {
        Integer[] array = new Integer[size];
        for (int i = 0; i < size; i++) {
            array[i] = i;
        }
        return array;
    }

    public static char[] generateRandomCharArray(int size) {
        Random random = new Random();
        char[] array = new char[size];
        for (int i = 0; i < size; i++) {
            array[i] = (char) (random.nextInt(26) + 'a');
        }
        return array;
    }

    public static char[] generateSortedCharArray(int size) {
        char[] array = new char[size];
        for (int i = 0; i < size; i++) {
            array[i] = (char) (i + 'a');
        }
        return array;
    }

    public static <T extends Comparable<T>> long timeBubbleSortWhileNeeded(T[] array) {
        BubbleSortWhileNeeded<T> bubbleSortWhile = new BubbleSortWhileNeeded<>();
        long startTime = System.nanoTime();
        bubbleSortWhile.sort(array);
        long endTime = System.nanoTime();
        return endTime - startTime;
    }

    public static <T extends Comparable<T>> long timeBubbleSortUntilNoChange(T[] array) {
        BubbleSortUntilNoChange<T> bubbleSortNoChange = new BubbleSortUntilNoChange<>();
        long startTime = System.nanoTime();
        bubbleSortNoChange.sort(array);
        long endTime = System.nanoTime();
        return endTime - startTime;
    }

    public static <T extends Comparable<T>> long timeQuickSortGPT(T[] array) {
        QuickSortGPT<T> quickSort = new QuickSortGPT<>();
        long startTime = System.nanoTime();
        quickSort.sort(array);
        long endTime = System.nanoTime();
        return endTime - startTime;
    }

    public static <T extends Comparable<T>> long timeSelectionSortGPT(T[] array) {
        SelectionSortGPT<T> selectionSort = new SelectionSortGPT<>();
        long startTime = System.nanoTime();
        selectionSort.sort(array);
        long endTime = System.nanoTime();
        return endTime - startTime;
    }

    public static void main(String[] args) {
        int arraySize = 1000;
        int repetitions = 100;
        Integer[] array;
        array = generateRandomIntArray(arraySize);

        Long[] intResultsBubbleSortWhileNeeded = new Long[repetitions];
        Long[] intResultsBubbleSortUntilNoChange = new Long[repetitions];
        Long[] intResultsQuickSortGPT = new Long[repetitions];
        Long[] intResultsSelectionSortGPT = new Long[repetitions];

        System.out.println("Starting bubble sort while needed");
        for (int i = 0; i < repetitions; i++) {
            intResultsBubbleSortWhileNeeded[i] = timeBubbleSortWhileNeeded(array.clone());
        }

        System.out.println("Starting bubble sort until no change");
        for (int i = 0; i < repetitions; i++) {
            intResultsBubbleSortUntilNoChange[i] = timeBubbleSortUntilNoChange(array.clone());
        }

        System.out.println("Starting quick sort GPT");
        for (int i = 0; i < repetitions; i++) {
            intResultsQuickSortGPT[i] = timeQuickSortGPT(array.clone());
        }

        System.out.println("Starting selection sort GPT");
        for (int i = 0; i < repetitions; i++) {
            intResultsSelectionSortGPT[i] = timeSelectionSortGPT(array.clone());
        }

        try {
            String filepath = "../results/int_" + arraySize + "_results.csv";
            File results = new File(filepath);

            if (results.createNewFile()) {
                System.out.println("File created: " + results.getName());

            } else {
                System.out.println("File already exists.");
            }

            FileWriter writer = new FileWriter(filepath);
            writer.append("BubbleSortWhileNeeded,BubbleSortUntilNoChange,QuickSortGPT,SelectionSortGPT\n");
            for (int i = 0; i < repetitions; i++) {
                writer.append(intResultsBubbleSortWhileNeeded[i].toString()).append(",")
                        .append(intResultsBubbleSortUntilNoChange[i].toString()).append(",")
                        .append(intResultsQuickSortGPT[i].toString()).append(",")
                        .append(intResultsSelectionSortGPT[i].toString()).append("\n");
            }
            writer.close();

        } catch (IOException e) {
            e.printStackTrace();
        }

    }

    // public static void testIntArray() {
    // // array generation

    // // testing BubbleSortWhileNeeded
    // BubbleSortWhileNeeded<Integer> bubbleSortWhile = new
    // BubbleSortWhileNeeded<>();
    // long startTime = System.nanoTime();
    // bubbleSortWhile.sort(array.clone());
    // long endTime = System.nanoTime();
    // System.out.println("BubbleSortWhileNeeded took: " + (endTime - startTime) + "
    // ns");

    // // testing BubbleSortUntilNoChange
    // BubbleSortUntilNoChange<Integer> bubbleSortNoChange = new
    // BubbleSortUntilNoChange<>();
    // startTime = System.nanoTime();
    // bubbleSortNoChange.sort(array.clone());
    // endTime = System.nanoTime();
    // System.out.println("BubbleSortUntilNoChange took: " + (endTime - startTime) +
    // " ns");

    // // testing QuickSortGPT
    // QuickSortGPT<Integer> quickSort = new QuickSortGPT<>();
    // startTime = System.nanoTime();
    // quickSort.sort(array.clone());
    // endTime = System.nanoTime();
    // System.out.println("QuickSortGPT took: " + (endTime - startTime) + " ns");

    // // Testing SelectionSortGPT
    // SelectionSortGPT<Integer> selectionSort = new SelectionSortGPT<>();
    // startTime = System.nanoTime();
    // selectionSort.sort(array.clone());
    // endTime = System.nanoTime();
    // System.out.println("SelectionSortGPT took: " + (endTime - startTime) + "
    // ns");
    // }
}
