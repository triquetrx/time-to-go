# time-to-go

**Node Module**: A lightweight utility to calculate time differences, add or subtract days, months, or years, and determine relative time (e.g., "X days ago" or "X days to").

## Features

- **Add or Subtract Time**:
    - Add or subtract days, months, or years to/from a given date.
    
- **Relative Time**:
    - Get human-readable relative time, such as:
        - `"5 days ago"`
        - `"2 months to"`

## Installation

Install the package using npm:

```bash
npm install time-to-go
```

## Usage
const timeToGo = require('time-to-go');// Add 5 days to the current date
const newDate = timeToGo.addDays(new Date(), 5);

// Subtract 2 months from a specific date
const updatedDate = timeToGo.subtractMonths(new Date('2023-01-01'), 2);

// Add 1 year to a specific date
const futureDate = timeToGo.addYears(new Date('2023-01-01'), 1);// Get "5 days ago" from a specific date
const relativePast = timeToGo.ago(new Date('2023-01-10'), 5, 'days');

// Get "2 months to" from a specific date
const relativeFuture = timeToGo.to(new Date('2023-01-01'), 2, 'months');
