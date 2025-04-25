import { TimeDiff } from '../src/time';

describe('TimeDiff.getDateTimeDiff', () => {
    let timeDiff: TimeDiff;

    beforeEach(() => {
        timeDiff = new TimeDiff();
    });

    it('should return "23 years ago" for a difference of 23 years in the past', () => {
        const prevDate = new Date(2000, 0, 1); // Jan 1, 2000
        const currentDate = new Date(2023, 0, 1); // Jan 1, 2023
        expect(timeDiff.getDateTimeDiff(prevDate, currentDate)).toBe('23 years ago');
    });

    it('should return "5 months to go" for a difference of 5 months in the future', () => {
        const prevDate = new Date(2023, 0, 1); // Jan 1, 2023
        const currentDate = new Date(2022, 7, 1); // Aug 1, 2022
        expect(timeDiff.getDateTimeDiff(prevDate, currentDate)).toBe('5 months to go');
    });

    it('should return "4 days to go" for a difference of 4 days in the future', () => {
        const prevDate = new Date(2023, 0, 5); // Jan 5, 2023
        const currentDate = new Date(2023, 0, 1); // Jan 1, 2023
        expect(timeDiff.getDateTimeDiff(prevDate, currentDate)).toBe('4 days to go');
    });

    it('should return "8 hours to go" for a difference of 8 hours in the future', () => {
        const prevDate = new Date(2023, 0, 1, 18); // Jan 1, 2023, 6:00 PM
        const currentDate = new Date(2023, 0, 1, 10); // Jan 1, 2023, 10:00 AM
        expect(timeDiff.getDateTimeDiff(prevDate, currentDate)).toBe('8 hours to go');
    });

    it('should return "45 minutes to go" for a difference of 45 minutes in the future', () => {
        const prevDate = new Date(2023, 0, 1, 10, 45); // Jan 1, 2023, 10:45 AM
        const currentDate = new Date(2023, 0, 1, 10, 0); // Jan 1, 2023, 10:00 AM
        expect(timeDiff.getDateTimeDiff(prevDate, currentDate)).toBe('45 minutes to go');
    });

    it('should return "30 seconds to go" for a difference of 30 seconds in the future', () => {
        const prevDate = new Date(2023, 0, 1, 10, 0, 30); // Jan 1, 2023, 10:00:30 AM
        const currentDate = new Date(2023, 0, 1, 10, 0, 0); // Jan 1, 2023, 10:00:00 AM
        expect(timeDiff.getDateTimeDiff(prevDate, currentDate)).toBe('30 seconds to go');
    });

    it('should return "500 milliseconds to go" for a difference of 500 milliseconds in the future', () => {
        const prevDate = new Date(2023, 0, 1, 10, 0, 0, 500); // Jan 1, 2023, 10:00:00.500 AM
        const currentDate = new Date(2023, 0, 1, 10, 0, 0, 0); // Jan 1, 2023, 10:00:00.000 AM
        expect(timeDiff.getDateTimeDiff(prevDate, currentDate)).toBe('500 milliseconds to go');
    });

    it('should return an empty string for no difference', () => {
        const prevDate = new Date(2023, 0, 1); // Jan 1, 2023
        const currentDate = new Date(2023, 0, 1); // Jan 1, 2023
        expect(timeDiff.getDateTimeDiff(prevDate, currentDate)).toBe('');
    });

    it('should return "1 year ago" for a difference of exactly 365 days in the past', () => {
        const prevDate = new Date(2022, 0, 1); // Jan 1, 2022
        const currentDate = new Date(2023, 0, 1); // Jan 1, 2023
        expect(timeDiff.getDateTimeDiff(prevDate, currentDate)).toBe('1 year ago');
    });

    it('should return "1 month ago" for a difference of exactly 30 days in the past', () => {
        const prevDate = new Date(2023, 0, 1); // Jan 1, 2023
        const currentDate = new Date(2023, 1, 1); // Feb 1, 2023
        expect(timeDiff.getDateTimeDiff(prevDate, currentDate)).toBe('1 month ago');
    });
});

describe('addDays', () => {
    it('should add days correctly', () => {
        const date = new Date(2023, 9, 15); // October 15, 2023
        const timeDiff = new TimeDiff();
        expect(timeDiff.addDays(date, 10)).toEqual(new Date(2023, 9, 25));
    });
});

describe('addMonths', () => {
    it('should add months correctly', () => {
        const date = new Date(2023, 9, 15); // October 15, 2023
        const timeDiff = new TimeDiff();
        expect(timeDiff.addMonths(date, 3)).toEqual(new Date(2024, 0, 15)); // January 15, 2024
    });
});

describe('addYears', () => {
    it('should add years correctly', () => {
        const date = new Date(2023, 9, 15); // October 15, 2023
        const timeDiff = new TimeDiff();
        expect(timeDiff.addYears(date, 2)).toEqual(new Date(2025, 9, 15));
    });
});

describe('subtractDays', () => {
    it('should subtract days correctly', () => {
        const date = new Date(2023, 9, 15); // October 15, 2023
        const timeDiff = new TimeDiff();
        expect(timeDiff.subtractDays(date, 10)).toEqual(new Date(2023, 9, 5));
    });
});

describe('subtractMonths', () => {
    it('should subtract months correctly', () => {
        const date = new Date(2023, 9, 15); // October 15, 2023
        const timeDiff = new TimeDiff();
        expect(timeDiff.subtractMonths(date, 3)).toEqual(new Date(2023, 6, 15)); // July 15, 2023
    });
});

describe('subtractYears', () => {
    it('should subtract years correctly', () => {
        const date = new Date(2023, 9, 15); // October 15, 2023
        const timeDiff = new TimeDiff();
        expect(timeDiff.subtractYears(date, 2)).toEqual(new Date(2021, 9, 15));
    });
});