import { Question } from '../store/models/survey';

const two_words: Question[] = [
  {
    questionIndex: 0,
    test: 'Hello World',
    caseVariant: 'kebab-case',
    check: 'hello-world',
    possibilities: ['hello-world', 'trello-world', 'hello-worm', 'bello-world'],
    errors: 0,
    timeTaken: 0,
  },
  {
    questionIndex: 0,
    test: 'Good Morning',
    caseVariant: 'kebab-case',
    check: 'good-morning',
    possibilities: [
      'good-morning',
      'good-morgan',
      'hood-morning',
      'food-morning',
    ],
    errors: 0,
    timeTaken: 0,
  },
  {
    questionIndex: 0,
    test: 'Good Luck',
    caseVariant: 'kebab-case',
    check: 'good-luck',
    possibilities: ['good-luck', 'good-lock', 'hood-luck', 'good-luckk'],
    errors: 0,
    timeTaken: 0,
  },
  {
    questionIndex: 0,
    test: 'Baby Shark',
    caseVariant: 'camelCase',
    check: 'babyShark',
    possibilities: ['babyShark', 'berryShark', 'fancyShark', 'babySpark'],
    errors: 0,
    timeTaken: 0,
  },
  {
    questionIndex: 0,
    test: 'Gangnam Style',
    caseVariant: 'camelCase',
    check: 'gangnamStyle',
    possibilities: [
      'gangnamStyle',
      'gnamgnamStyle',
      'gangnamFile',
      'bangbangStyle',
    ],
    errors: 0,
    timeTaken: 0,
  },
  {
    questionIndex: 0,
    test: 'Sand Storm',
    caseVariant: 'camelCase',
    check: 'sandStorm',
    possibilities: ['sandStorm', 'sandStone', 'sadStorm', 'sandStream'],
    errors: 0,
    timeTaken: 0,
  },
];

const three_words: Question[] = [
  {
    questionIndex: 0,
    test: 'Feed the cat',
    caseVariant: 'camelCase',
    check: 'feedTheCat',
    possibilities: ['feedTheCat', 'feedTheRat', 'freeTheCat', 'feedMyCat'],
    errors: 0,
    timeTaken: 0,
  },
  {
    questionIndex: 0,
    test: 'Clean the house',
    caseVariant: 'camelCase',
    check: 'cleanTheHouse',
    possibilities: [
      'cleanTheHouse',
      'cleanTheMouse',
      'cleanTheHorse',
      'cleanTheHome',
    ],
    errors: 0,
    timeTaken: 0,
  },
  {
    questionIndex: 0,
    test: 'hold the door',
    caseVariant: 'kebab-case',
    check: 'hold-the-door',
    possibilities: [
      'hold-the-door',
      'cold-the-door',
      'smash-the-door',
      'hold-the-core',
    ],
    errors: 0,
    timeTaken: 0,
  },
  {
    questionIndex: 0,
    test: 'shake it off',
    caseVariant: 'kebab-case',
    check: 'shake-it-off',
    possibilities: [
      'shake-it-off',
      'shake-it-up',
      'bake-it-off',
      'shake-it-odd',
    ],
    errors: 0,
    timeTaken: 0,
  },
];

const four_words: Question[] = [
  {
    questionIndex: 0,
    test: 'wake me up inside',
    caseVariant: 'camelCase',
    check: 'wakeMeUpInside',
    possibilities: [
      'wakeMeUpInside',
      'wakeMeUpOutside',
      'wakeYouUpInside',
      'awayMeUpInside',
    ],
    errors: 0,
    timeTaken: 0,
  },
  {
    questionIndex: 0,
    test: 'we are number one',
    caseVariant: 'kebab-case',
    check: 'we-are-number-one',
    possibilities: [
      'we-are-number-one',
      'you-are-number-one',
      'we-are-cucumber-one',
      'we-are-number-two',
    ],
    errors: 0,
    timeTaken: 0,
  },
];

const five_words: Question[] = [
  {
    questionIndex: 0,
    test: 'who let the dogs out',
    caseVariant: 'camelCase',
    check: 'whoLetTheDogsOut',
    possibilities: [
      'whoLetTheDogsOut',
      'whoLetTheFrogsOut',
      'youLetTheDogsOut',
      'whoLetTheDogsIn',
    ],
    errors: 0,
    timeTaken: 0,
  },
  {
    questionIndex: 0,
    test: 'never gonna give you up',
    caseVariant: 'kebab-case',
    check: 'never-gonna-give-you-up',
    possibilities: [
      'never-gonna-give-you-up',
      'never-gonna-let-you-down',
      'never-gonna-run-around',
      'never-gonna-say-goodbye',
    ],
    errors: 0,
    timeTaken: 0,
  },
];

let questionsPreset: Question[] = [
  ...two_words,
  ...three_words,
  ...four_words,
  ...five_words,
];
questionsPreset.forEach(
  (question) =>
    (question.possibilities = question.possibilities.sort(
      () => Math.random() - 0.5
    ))
);
questionsPreset = questionsPreset.sort(() => Math.random() - 0.5);
questionsPreset.map((question, index) => (question.questionIndex = index));

export default questionsPreset;
