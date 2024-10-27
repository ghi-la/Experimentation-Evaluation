import java.util.Arrays;
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

    public static long testBubbleSortWhileNeededInt(Integer[] array) {
        BubbleSortWhileNeeded<Integer> bubbleSortWhile = new BubbleSortWhileNeeded<>();
        long startTime = System.nanoTime();
        bubbleSortWhile.sort(array.clone());
        long endTime = System.nanoTime();
        return endTime - startTime;
    }

    public static long testBubbleSortUntilNoChangeInt(Integer[] array) {
        BubbleSortUntilNoChange<Integer> bubbleSortNoChange = new BubbleSortUntilNoChange<>();
        long startTime = System.nanoTime();
        bubbleSortNoChange.sort(array.clone());
        long endTime = System.nanoTime();
        return endTime - startTime;
    }

    public static long testQuickSortGPTInt(Integer[] array) {
        QuickSortGPT<Integer> quickSort = new QuickSortGPT<>();
        long startTime = System.nanoTime();
        quickSort.sort(array.clone());
        long endTime = System.nanoTime();
        return endTime - startTime;
    }

    public static long testSelectionSortGPTInt(Integer[] array) {
        SelectionSortGPT<Integer> selectionSort = new SelectionSortGPT<>();
        long startTime = System.nanoTime();
        selectionSort.sort(array.clone());
        long endTime = System.nanoTime();
        return endTime - startTime;
    }

    public static void main(String[] args) {
        int arraySize = 10000;
        int repetitions = 10;
        Integer[] array;
        array = generateRandomIntArray(arraySize);

        Long[] intResultsBubbleSortWhileNeeded = new Long[repetitions];
        Long[] intResultsBubbleSortUntilNoChange = new Long[repetitions];
        Long[] intResultsQuickSortGPT = new Long[repetitions];
        Long[] intResultsSelectionSortGPT = new Long[repetitions];

        for (int i = 0; i < repetitions; i++) {
            intResultsBubbleSortWhileNeeded[i] = testBubbleSortWhileNeededInt(array.clone());
            intResultsBubbleSortUntilNoChange[i] = testBubbleSortUntilNoChangeInt(array.clone());
            intResultsQuickSortGPT[i] = testQuickSortGPTInt(array.clone());
            intResultsSelectionSortGPT[i] = testSelectionSortGPTInt(array.clone());
        }

        System.out.println("BubbleSortWhileNeeded took, on an average of " + repetitions + " attempts: \t"
                + (Arrays.stream(intResultsBubbleSortWhileNeeded).reduce(0L, Long::sum) / repetitions) + " ns");
        System.out.println("BubbleSortUntilNoChange took, on an average of " + repetitions + " attempts: \t"
                + (Arrays.stream(intResultsBubbleSortUntilNoChange).reduce(0L, Long::sum) / repetitions) + " ns");
        System.out.println(
                "QuickSortGPT took, on an average of " + repetitions + " attempts: \t\t"
                        + (Arrays.stream(intResultsQuickSortGPT).reduce(0L, Long::sum) / repetitions)
                        + " ns");
        System.out.println("SelectionSortGPT took, on an average of " + repetitions + " attempts: \t\t"
                + (Arrays.stream(intResultsSelectionSortGPT).reduce(0L, Long::sum) / repetitions) + " ns");
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
