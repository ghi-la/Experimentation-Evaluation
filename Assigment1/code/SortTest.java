import java.io.FileWriter;
import java.io.IOException;

public class SortTest {

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

    public static void performSortingTests(int repetitions, Integer[] intArray, Character[] charArray,
            Boolean[] boolArray,
            String intFilepath, String charFilepath, String boolFilepath, String averageFilepath) {

        // initialize arrays to store results
        Long[] intResultsBubbleSortWhileNeeded = new Long[repetitions];
        Long[] intResultsBubbleSortUntilNoChange = new Long[repetitions];
        Long[] intResultsQuickSortGPT = new Long[repetitions];
        Long[] intResultsSelectionSortGPT = new Long[repetitions];

        Long[] charResultsBubbleSortWhileNeeded = new Long[repetitions];
        Long[] charResultsBubbleSortUntilNoChange = new Long[repetitions];
        Long[] charResultsQuickSortGPT = new Long[repetitions];
        Long[] charResultsSelectionSortGPT = new Long[repetitions];

        Long[] boolResultsBubbleSortWhileNeeded = new Long[repetitions];
        Long[] boolResultsBubbleSortUntilNoChange = new Long[repetitions];
        Long[] boolResultsQuickSortGPT = new Long[repetitions];
        Long[] boolResultsSelectionSortGPT = new Long[repetitions];

        // initialize sums for each data type

        long intBubbleSortWhileNeededSum = 0;
        long intBubbleSortUntilNoChangeSum = 0;
        long intQuickSortGPTSum = 0;
        long intSelectionSortGPTSum = 0;

        long charBubbleSortWhileNeededSum = 0;
        long charBubbleSortUntilNoChangeSum = 0;
        long charQuickSortGPTSum = 0;
        long charSelectionSortGPTSum = 0;

        long boolBubbleSortWhileNeededSum = 0;
        long boolBubbleSortUntilNoChangeSum = 0;
        long boolQuickSortGPTSum = 0;
        long boolSelectionSortGPTSum = 0;

        long progress = 0;
        for (int i = 0; i < repetitions; i++) {

            // update arrays
            intResultsBubbleSortWhileNeeded[i] = timeBubbleSortWhileNeeded(intArray.clone());
            intResultsBubbleSortUntilNoChange[i] = timeBubbleSortUntilNoChange(intArray.clone());
            intResultsQuickSortGPT[i] = timeQuickSortGPT(intArray.clone());
            intResultsSelectionSortGPT[i] = timeSelectionSortGPT(intArray.clone());
            charResultsBubbleSortWhileNeeded[i] = timeBubbleSortWhileNeeded(charArray.clone());
            charResultsBubbleSortUntilNoChange[i] = timeBubbleSortUntilNoChange(charArray.clone());
            charResultsQuickSortGPT[i] = timeQuickSortGPT(charArray.clone());
            charResultsSelectionSortGPT[i] = timeSelectionSortGPT(charArray.clone());
            boolResultsBubbleSortWhileNeeded[i] = timeBubbleSortWhileNeeded(boolArray.clone());
            boolResultsBubbleSortUntilNoChange[i] = timeBubbleSortUntilNoChange(boolArray.clone());
            boolResultsQuickSortGPT[i] = timeQuickSortGPT(boolArray.clone());
            boolResultsSelectionSortGPT[i] = timeSelectionSortGPT(boolArray.clone());

            // update sums
            intBubbleSortWhileNeededSum += intResultsBubbleSortWhileNeeded[i];
            intBubbleSortUntilNoChangeSum += intResultsBubbleSortUntilNoChange[i];
            intQuickSortGPTSum += intResultsQuickSortGPT[i];
            intSelectionSortGPTSum += intResultsSelectionSortGPT[i];

            charBubbleSortWhileNeededSum += charResultsBubbleSortWhileNeeded[i];
            charBubbleSortUntilNoChangeSum += charResultsBubbleSortUntilNoChange[i];
            charQuickSortGPTSum += charResultsQuickSortGPT[i];
            charSelectionSortGPTSum += charResultsSelectionSortGPT[i];

            boolBubbleSortWhileNeededSum += boolResultsBubbleSortWhileNeeded[i];
            boolBubbleSortUntilNoChangeSum += boolResultsBubbleSortUntilNoChange[i];
            boolQuickSortGPTSum += boolResultsQuickSortGPT[i];
            boolSelectionSortGPTSum += boolResultsSelectionSortGPT[i];

            progress = i * 100 / repetitions;
            System.out.println(progress + "% done");
        }

        String header = "BubbleSortWhileNeeded,BubbleSortUntilNoChange,QuickSortGPT,SelectionSortGPT\n";

        try {

            FileWriter intWriter = new FileWriter(intFilepath);
            intWriter.append(header);
            for (int i = 0; i < repetitions; i++) {
                intWriter.append(intResultsBubbleSortWhileNeeded[i].toString()).append(",")
                        .append(intResultsBubbleSortUntilNoChange[i].toString()).append(",")
                        .append(intResultsQuickSortGPT[i].toString()).append(",")
                        .append(intResultsSelectionSortGPT[i].toString()).append("\n");
            }
            intWriter.close();

            FileWriter charWriter = new FileWriter(charFilepath);
            charWriter.append(header);
            for (int i = 0; i < repetitions; i++) {
                charWriter.append(charResultsBubbleSortWhileNeeded[i].toString()).append(",")
                        .append(charResultsBubbleSortUntilNoChange[i].toString()).append(",")
                        .append(charResultsQuickSortGPT[i].toString()).append(",")
                        .append(charResultsSelectionSortGPT[i].toString()).append("\n");
            }
            charWriter.close();

            FileWriter boolWriter = new FileWriter(boolFilepath);
            boolWriter.append(header);
            for (int i = 0; i < repetitions; i++) {
                boolWriter.append(boolResultsBubbleSortWhileNeeded[i].toString()).append(",")
                        .append(boolResultsBubbleSortUntilNoChange[i].toString()).append(",")
                        .append(boolResultsQuickSortGPT[i].toString()).append(",")
                        .append(boolResultsSelectionSortGPT[i].toString()).append("\n");
            }
            boolWriter.close();

        } catch (IOException e) {
            e.printStackTrace();
        }

        try {

            FileWriter averageWriter = new FileWriter(averageFilepath);
            // Write the header row
            averageWriter
                    .append("DataType,BubbleSortWhileNeeded,BubbleSortUntilNoChange,QuickSortGPT,SelectionSortGPT\n");

            // Write averages for each data type in one file
            // Integer averages row
            averageWriter.append("int,")
                    .append(String.valueOf(intBubbleSortWhileNeededSum / repetitions)).append(",")
                    .append(String.valueOf(intBubbleSortUntilNoChangeSum / repetitions)).append(",")
                    .append(String.valueOf(intQuickSortGPTSum / repetitions)).append(",")
                    .append(String.valueOf(intSelectionSortGPTSum / repetitions)).append("\n");

            // Char averages row
            averageWriter.append("char,")
                    .append(String.valueOf(charBubbleSortWhileNeededSum / repetitions)).append(",")
                    .append(String.valueOf(charBubbleSortUntilNoChangeSum / repetitions)).append(",")
                    .append(String.valueOf(charQuickSortGPTSum / repetitions)).append(",")
                    .append(String.valueOf(charSelectionSortGPTSum / repetitions)).append("\n");

            // Bool averages row
            averageWriter.append("bool,")
                    .append(String.valueOf(boolBubbleSortWhileNeededSum / repetitions)).append(",")
                    .append(String.valueOf(boolBubbleSortUntilNoChangeSum / repetitions)).append(",")
                    .append(String.valueOf(boolQuickSortGPTSum / repetitions)).append(",")
                    .append(String.valueOf(boolSelectionSortGPTSum / repetitions)).append("\n");

            averageWriter.close();

        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public static void runTests(int repetition, int arraySize, boolean warmUp) {
        if (warmUp) {
            // // warm-up run
            // Integer[] warmUpIntArray = ArrayGenerator.randomIntArray(arraySize);
            // Character[] warmUpCharArray = ArrayGenerator.randomCharArray(arraySize);
            // Boolean[] warmUpBoolArray = ArrayGenerator.randomBooleanArray(arraySize);
            // for (int i = 0; i < repetition; i++) {
            // timeBubbleSortWhileNeeded(warmUpIntArray.clone());
            // timeBubbleSortUntilNoChange(warmUpIntArray.clone());
            // timeQuickSortGPT(warmUpIntArray.clone());
            // timeSelectionSortGPT(warmUpIntArray.clone());

            // timeBubbleSortWhileNeeded(warmUpCharArray.clone());
            // timeBubbleSortUntilNoChange(warmUpCharArray.clone());
            // timeQuickSortGPT(warmUpCharArray.clone());
            // timeSelectionSortGPT(warmUpCharArray.clone());

            // timeBubbleSortWhileNeeded(warmUpBoolArray.clone());
            // timeBubbleSortUntilNoChange(warmUpBoolArray.clone());
            // timeQuickSortGPT(warmUpBoolArray.clone());
            // timeSelectionSortGPT(warmUpBoolArray.clone());
            // }

            // warm-up run
            Integer[] warmUpRandomIntArray = ArrayGenerator.randomIntArray(arraySize);
            String warmUpRandomIntFilepath = "../results/warmup_int_" + arraySize + "_random_results.csv";

            Character[] warmUpRandomCharArray = ArrayGenerator.randomCharArray(arraySize);
            String warmUpRandomCharFilepath = "../results/warmup_char_" + arraySize + "_random_results.csv";

            Boolean[] warmUpRandomBoolArray = ArrayGenerator.randomBooleanArray(arraySize);
            String warmUpRandomBoolFilepath = "../results/warmup_bool_" + arraySize + "_random_results.csv";

            String warmUpRandomAverageFilepath = "../results/warmup_average_" + arraySize + "_random_results.csv";

            performSortingTests(repetition, warmUpRandomIntArray, warmUpRandomCharArray, warmUpRandomBoolArray,
                    warmUpRandomIntFilepath,
                    warmUpRandomCharFilepath, warmUpRandomBoolFilepath, warmUpRandomAverageFilepath);
            return;
        }

        // random arrays generation
        Integer[] randomIntArray = ArrayGenerator.randomIntArray(arraySize);
        String randomIntFilepath = "../results/int_" + arraySize + "_random_results.csv";

        Character[] randomCharArray = ArrayGenerator.randomCharArray(arraySize);
        String randomCharFilepath = "../results/char_" + arraySize + "_random_results.csv";

        Boolean[] randomBoolArray = ArrayGenerator.randomBooleanArray(arraySize);
        String randomBoolFilepath = "../results/bool_" + arraySize + "_random_results.csv";

        String randomAverageFilepath = "../results/average_" + arraySize + "_random_results.csv";

        System.out.println("Random arrays:");

        // test with random arrays
        performSortingTests(repetition, randomIntArray, randomCharArray, randomBoolArray, randomIntFilepath,
                randomCharFilepath, randomBoolFilepath, randomAverageFilepath);

        // ************************************************************
        // ************************************************************

        // sorted arrays generation
        Integer[] sortedIntArray = ArrayGenerator.sortedIntArray(arraySize);
        String sortedIntFilepath = "../results/int_" + arraySize + "_sorted_results.csv";

        Character[] sortedCharArray = ArrayGenerator.sortedCharArray(arraySize);
        String sortedCharFilepath = "../results/char_" + arraySize + "_sorted_results.csv";

        Boolean[] sortedBoolArray = ArrayGenerator.sortedBooleanArray(arraySize);
        String sortedBoolFilepath = "../results/bool_" + arraySize + "_sorted_results.csv";

        String sortedAverageFilepath = "../results/average_" + arraySize + "_sorted_results.csv";

        System.out.println("Sorted arrays:");

        // test with sorted arrays
        performSortingTests(repetition, sortedIntArray, sortedCharArray, sortedBoolArray, sortedIntFilepath,
                sortedCharFilepath, sortedBoolFilepath, sortedAverageFilepath);

        // ************************************************************
        // ************************************************************

        // sorted arrays generation
        Integer[] reverseSortedIntArray = ArrayGenerator.reverseSortedIntArray(arraySize);
        String reverseSortedIntFilepath = "../results/int_" + arraySize + "_reverse_sorted_results.csv";

        Character[] reverseSortedCharArray = ArrayGenerator.reverseSortedCharArray(arraySize);
        String reverseSortedCharFilepath = "../results/char_" + arraySize + "_reverse_sorted_results.csv";

        Boolean[] reverseSortedBoolArray = ArrayGenerator.reverseSortedBooleanArray(arraySize);
        String reverseSortedBoolFilepath = "../results/bool_" + arraySize + "_reverse_sorted_results.csv";

        String reverseSortedAverageFilepath = "../results/average_" + arraySize + "_reverse_sorted_results.csv";

        System.out.println("Reverse sorted arrays:");

        // test with reverse sorted arrays
        performSortingTests(repetition, reverseSortedIntArray, reverseSortedCharArray, reverseSortedBoolArray,
                reverseSortedIntFilepath, reverseSortedCharFilepath, reverseSortedBoolFilepath,
                reverseSortedAverageFilepath);

        // ************************************************************
        // ************************************************************

    }

    public static void main(String[] args) {
        // warm-up run
        runTests(10, 1000, true);

        // run 100 tests using arrays of size 1000
        // runTests(100, 1000, false);

        // run 100 tests using arrays of size 10000
        // runTests(100, 10000, false);
    }
}
