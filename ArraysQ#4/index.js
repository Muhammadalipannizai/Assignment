const tvShows = [
  {
    title: "Planet Earth II",
    score: 9.5,
    year: 2016,
    numRatings: 5000,
  },
  {
    title: "Planet Earth",
    score: 9.4,
    year: 2006,
    numRatings: 5000,
  },
  {
    title: "Breaking Bad",
    score: 9.4,
    year: 2008,
    numRatings: 6000,
  },
  {
    title: "Band Of Brothers",
    score: 9.4,
    year: 2001,
    numRatings: 4900,
  },
  {
    title: "Chernobyl",
    score: 9.3,
    year: 2019,
    numRatings: 4900,
  },
  {
    title: "Jingle All The Way",
    score: 7.1,
    year: 1996,
    numRatings: 5000,
  },
  {
    title: "The Wire",
    score: 9.3,
    year: 2002,
    numRatings: 6000,
  },
];
let { highest, secondHighest } = tvShows.reduce(
  (values, currentVal) => {
    if (currentVal.score > values.highest.score) {
      values.secondHighest = values.highest;
      values.highest = currentVal;
    } else if (
      currentVal.score === values.highest.score &&
      currentVal.numRatings > values.highest.numRatings
    ) {
      values.secondHighest = values.highest;
      values.highestRated = currentVal;
    } else if (
      currentVal.score > values.secondHighest.score ||
      (currentVal.score === values.secondHighest.score &&
        currentVal.numRatings > values.secondHighest.numRatings)
    ) {
      {
        values.secondHighest = currentVal;
      }
    }
    return values;
  },
  {
    highest: { score: 0, numRatings: 0 },
    secondHighest: { score: 0, numRatings: 0 },
  }
);

console.log("The Highest Rated TV Show ", highest);
console.log("The Second highest Rated TV Show ", secondHighest);
