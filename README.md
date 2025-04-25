# @triquetrx/time-to-go

**Description**: A lightweight utility to calculate time differences, add or subtract days, months, or years, and determine relative time (e.g., "X months/days/hours/seconds/milliseconds ago" or "X months/days/hours/seconds/milliseconds to go").

## Features

- **Add or Subtract Time**:
    - Add or subtract days, months, or years to/from a given date.
    - Adding Days, Months or Years
        - `addDays`: Params (Date, numberOfDays)
        - `addMonths`: Params (Date, numberOfMonths)
        - `addYears`:  Params (Date, numberOfYears)
    - Subtracting Days, Months or Years
        - `subtractDays`: Params (Date, number of days)
        - `subtractMonths`: Params (Date, number of months)
        - `subtractYears`:  Params (Date, number of years)
    
- **Relative Time**:
    - Get human-readable relative time, such as:
        - `getDateTimeDiff`: Params (prevDate, toDate)
    - Example Output:
        - `"5 days ago"`
        - `"2 months to go"`

## Installation

Install the package using npm:

```bash
npm install time-to-go
```

## Usage

**Example usage of TimeDiff**
```typescript
import { TimeDiff } from '@triquetrx/time-to-go';

const timeDiff = new TimeDiff();
const diff = timeDiff.getDateTimeDiff(new Date(2023, 9, 15), new Date(2020, 5, 10));
const newDate = timeToGo.addDays(new Date(), 5);
```
**Example usage of diff from given date to current Date**
```typescript
import { TimeDiff } from '@triquetrx/time-to-go';

const timeDiff = new TimeDiff();
const diff2 = timeDiff.getDateTimeDiff(new Date("04/25/2025"));
```

**Example usage of Adding, Substracting days, months and years**
```typescript
import { TimeDiff } from '@triquetrx/time-to-go';

const timeDiff = new TimeDiff();

// Subtract 2 months from a specific date
const updatedDate = timeToGo.subtractMonths(new Date('2023-01-01'), 2);

// Add 1 year to a specific date
const futureDate = timeToGo.addYears(new Date('2023-01-01'), 1);// Get "5 days ago" from a specific date
const relativePast = timeToGo.ago(new Date('2023-01-10'), 5, 'days');

// Get "1 year ago" from a specific date
const prevDate = new Date(2022, 0, 1); // Jan 1, 2022
const currentDate = new Date(2023, 0, 1); // Jan 1, 2023
timeDiff.getDateTimeDiff(prevDate, currentDate)
```
