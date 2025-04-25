export class TimeDiff {
    constructor() { }

    getDateTimeDiff(prevDate: Date, currentDate?: Date): string {
        if (!currentDate) {
            currentDate = new Date();
        }
        const isNegative = prevDate.getTime() < currentDate.getTime();
        const diff = Math.abs(prevDate.getTime() - currentDate.getTime());

        const milliseconds = diff % 1000;
        const seconds = Math.floor((diff / 1000) % 60);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));

        let result = '';

        // Convert days to months or years
        if (days >= 365) {
            const years = Math.floor(days / 365);
            result = `${years} ${years > 1 ? 'years' : 'year'}`;
        } else if (days >= 30) {
            const months = Math.floor(days / 30);
            result = `${months} ${months > 1 ? 'months' : 'month'}`;
        } else if (days > 0) {
            result = `${days} ${days > 1 ? 'days' : 'day'}`;
        } else if (hours > 0) {
            result = `${hours} ${hours > 1 ? 'hours' : 'hour'}`;
        } else if (minutes > 0) {
            result = `${minutes} ${minutes > 1 ? 'minutes' : 'minute'}`;
        } else if (seconds > 0) {
            result = `${seconds} ${seconds > 1 ? 'seconds' : 'second'}`;
        } else if (milliseconds > 0) {
            result = `${milliseconds} ${milliseconds > 1 ? 'milliseconds' : 'millisecond'}`;
        }

        if (result === '') {
            return '';
        }

        return isNegative ? `${result} ago` : `${result} to go`;
    }

    public addDays = (date: Date, days: number): Date => {
        const newDate = new Date(date);
        newDate.setDate(newDate.getDate() + days);
        return newDate;
    }

    public addMonths = (date: Date, months: number): Date => {
        const newDate = new Date(date);
        newDate.setMonth(newDate.getMonth() + months);
        return newDate;
    }

    public addYears = (date: Date, years: number): Date => {
        const newDate = new Date(date);
        newDate.setFullYear(newDate.getFullYear() + years);
        return newDate;
    }

    public subtractDays = (date: Date, days: number): Date => {
        const newDate = new Date(date);
        newDate.setDate(newDate.getDate() - days);
        return newDate;
    }

    public subtractMonths = (date: Date, months: number): Date => {
        const newDate = new Date(date);
        newDate.setMonth(newDate.getMonth() - months);
        return newDate;
    }

    public subtractYears = (date: Date, years: number): Date => {
        const newDate = new Date(date);
        newDate.setFullYear(newDate.getFullYear() - years);
        return newDate;
    }
}
