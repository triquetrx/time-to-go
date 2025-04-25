import { TimeDiff } from './src/time';
import { TimeDiffAI } from './src/time-ai';

// Example usage of TimeDiffAI
const timeDiff = new TimeDiff();
const diff = timeDiff.getDateTimeDiff(new Date(2023, 9, 15), new Date(2020, 5, 10));
console.log(diff); // 3 years to go
// Example usage of diff from given date to current Date
const diff2 = timeDiff.getDateTimeDiff(new Date("04/25/2025"));
console.log(diff2);