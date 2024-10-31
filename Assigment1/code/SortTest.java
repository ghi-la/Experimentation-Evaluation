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

    public static Character[] generateRandomCharArray(int size) {
        Random random = new Random();
        Character[] array = new Character[size];
        for (int i = 0; i < size; i++) {
            array[i] = (char) (random.nextInt(26) + 'a');
        }
        return array;
    }

    public static Character[] generateSortedCharArray(int size) {
        Character[] array = new Character[size];
        for (int i = 0; i < size; i++) {
            array[i] = (char) (i + 'a');
        }
        return array;
    }

    public static Boolean[] generateRandomBooleanArray(int size) {
        Random random = new Random();
        Boolean[] array = new Boolean[size];
        for (int i = 0; i < size; i++) {
            array[i] = random.nextBoolean();
        }
        return array;
    }

    public static Boolean[] generateSortedBooleanArray(int size) {
        Boolean[] array = new Boolean[size];
        for (int i = 0; i < size; i++) {
            array[i] = i < size / 2;
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
        Integer[] intArray;
        Character[] charArray;
        Boolean[] boolArray;

        // random arrays
        intArray = generateRandomIntArray(arraySize);
        charArray = generateRandomCharArray(arraySize);
        boolArray = generateRandomBooleanArray(arraySize);

        // sorted arrays
        // intArray = generateSortedIntArray(arraySize);
        // charArray = generateSortedCharArray(arraySize);
        // boolArray = generateSortedBooleanArray(arraySize);

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

        System.out.println("Starting bubble sort while needed for integers");
        for (int i = 0; i < repetitions; i++) {
            intResultsBubbleSortWhileNeeded[i] = timeBubbleSortWhileNeeded(intArray.clone());
        }

        System.out.println("Starting bubble sort until no change for integers");
        for (int i = 0; i < repetitions; i++) {
            intResultsBubbleSortUntilNoChange[i] = timeBubbleSortUntilNoChange(intArray.clone());
        }

        System.out.println("Starting quick sort GPT for integers");
        for (int i = 0; i < repetitions; i++) {
            intResultsQuickSortGPT[i] = timeQuickSortGPT(intArray.clone());
        }

        System.out.println("Starting selection sort GPT for integers");
        for (int i = 0; i < repetitions; i++) {
            intResultsSelectionSortGPT[i] = timeSelectionSortGPT(intArray.clone());
        }

        System.out.println("Starting bubble sort while needed for chars");
        for (int i = 0; i < repetitions; i++) {
            charResultsBubbleSortWhileNeeded[i] = timeBubbleSortWhileNeeded(charArray.clone());
        }

        System.out.println("Starting bubble sort until no change for chars");
        for (int i = 0; i < repetitions; i++) {
            charResultsBubbleSortUntilNoChange[i] = timeBubbleSortUntilNoChange(charArray.clone());
        }

        System.out.println("Starting quick sort GPT for chars");
        for (int i = 0; i < repetitions; i++) {
            charResultsQuickSortGPT[i] = timeQuickSortGPT(charArray.clone());
        }

        System.out.println("Starting selection sort GPT for chars");
        for (int i = 0; i < repetitions; i++) {
            charResultsSelectionSortGPT[i] = timeSelectionSortGPT(charArray.clone());
        }

        System.out.println("Starting bubble sort while needed for booleans");
        for (int i = 0; i < repetitions; i++) {
            boolResultsBubbleSortWhileNeeded[i] = timeBubbleSortWhileNeeded(boolArray.clone());
        }

        System.out.println("Starting bubble sort until no change for booleans");
        for (int i = 0; i < repetitions; i++) {
            boolResultsBubbleSortUntilNoChange[i] = timeBubbleSortUntilNoChange(boolArray.clone());
        }

        System.out.println("Starting quick sort GPT for booleans");
        for (int i = 0; i < repetitions; i++) {
            boolResultsQuickSortGPT[i] = timeQuickSortGPT(boolArray.clone());
        }

        System.out.println("Starting selection sort GPT for booleans");
        for (int i = 0; i < repetitions; i++) {
            boolResultsSelectionSortGPT[i] = timeSelectionSortGPT(boolArray.clone());
        }

        try {
            String intFilepath = "../results/int_" + arraySize + "_random_results.csv";
            // String intFilepath = "../results/int_" + arraySize + "_sorted_results.csv";
            File intResultsFile = new File(intFilepath);

            if (intResultsFile.createNewFile()) {
                System.out.println("File created: " + intResultsFile.getName());
            } else {
                System.out.println("File already exists.");
            }

            FileWriter intWriter = new FileWriter(intFilepath);
            intWriter.append("BubbleSortWhileNeeded,BubbleSortUntilNoChange,QuickSortGPT,SelectionSortGPT\n");
            for (int i = 0; i < repetitions; i++) {
                intWriter.append(intResultsBubbleSortWhileNeeded[i].toString()).append(",")
                        .append(intResultsBubbleSortUntilNoChange[i].toString()).append(",")
                        .append(intResultsQuickSortGPT[i].toString()).append(",")
                        .append(intResultsSelectionSortGPT[i].toString()).append("\n");
            }
            intWriter.close();

            String charFilepath = "../results/char_" + arraySize + "_random_results.csv";
            // String charFilepath = "../results/char_" + arraySize + "_sorted_results.csv";
            File charResultsFile = new File(charFilepath);

            if (charResultsFile.createNewFile()) {
                System.out.println("File created: " + charResultsFile.getName());
            } else {
                System.out.println("File already exists.");
            }

            FileWriter charWriter = new FileWriter(charFilepath);
            charWriter.append("BubbleSortWhileNeeded,BubbleSortUntilNoChange,QuickSortGPT,SelectionSortGPT\n");
            for (int i = 0; i < repetitions; i++) {
                charWriter.append(charResultsBubbleSortWhileNeeded[i].toString()).append(",")
                        .append(charResultsBubbleSortUntilNoChange[i].toString()).append(",")
                        .append(charResultsQuickSortGPT[i].toString()).append(",")
                        .append(charResultsSelectionSortGPT[i].toString()).append("\n");
            }
            charWriter.close();

            String boolFilepath = "../results/bool_" + arraySize + "_random_results.csv";
            // String boolFilepath = "../results/bool_" + arraySize + "_sorted_results.csv";
            File boolResultsFile = new File(boolFilepath);

            if (boolResultsFile.createNewFile()) {
                System.out.println("File created: " + boolResultsFile.getName());
            } else {
                System.out.println("File already exists.");
            }

            FileWriter boolWriter = new FileWriter(boolFilepath);
            boolWriter.append("BubbleSortWhileNeeded,BubbleSortUntilNoChange,QuickSortGPT,SelectionSortGPT\n");
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

        // calculate average for each combination and put them in a new file average.csv

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

        try {
            String averageFilepath = "../results/average_" + arraySize + "_random_results.csv";
            File averageResultsFile = new File(averageFilepath);

            if (averageResultsFile.createNewFile()) {
                System.out.println("File created: " + averageResultsFile.getName());
            } else {
                System.out.println("File already exists.");
            }

            FileWriter averageWriter = new FileWriter(averageFilepath);
            // Write the header row
            averageWriter
                    .append("DataType,BubbleSortWhileNeeded,BubbleSortUntilNoChange,QuickSortGPT,SelectionSortGPT\n");

            // Calculate sums for each data type over repetitions
            for (int i = 0; i < repetitions; i++) {
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
            }

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
}
