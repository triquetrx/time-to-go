import OpenAI from "openai";
import { Agent } from "https";

export class TimeDiffAI {

    private readonly openai: OpenAI | undefined;
    private apiKey: string | undefined;

    constructor(apiKey: string) {
        const agent =  new Agent({
            rejectUnauthorized: false
        })
        this.openai = new OpenAI({
            apiKey: apiKey,
            httpAgent: agent,
        });
        this.apiKey = apiKey;
        console.log(this.apiKey, apiKey);
    }

    public async getDateTimeDiffAI(date: Date, date2?: Date) {
        if (!this.apiKey) {
            throw new Error("OpenAI API key is not set.");
        }
        const date1String = date.toISOString().split("T")[0];
        if (!date2) {
            date2 = new Date();
        }
        const date2String = date2.toISOString().split("T")[0];
        const prompt = `Calculate the difference between ${date1String} and ${date2String} in years, months, and days.`;
        try {
            const response = await (this.openai as OpenAI).chat.completions.create({
                model: "gpt-3.5-turbo",
                messages: [{ role: "user", content: prompt }],
                max_tokens: 100,
            });
    
            return response.choices[0].message.content;
        } catch (error) {
            console.error("Error fetching response from OpenAI:", error);
            throw error;
        }
    };
    
    public async addDaysAI(date: Date, days: number) {
        if (!this.apiKey) {
            throw new Error("OpenAI API key is not set.");
        }
        const dateString = date.toISOString().split("T")[0];
        const prompt = `Add ${days} days to ${dateString}.`;
        try {
            const response = await (this.openai as OpenAI).chat.completions.create({
                model: "gpt-3.5-turbo",
                messages: [{ role: "user", content: prompt }],
                max_tokens: 100,
            });
    
            return response.choices[0].message.content;
        } catch (error) {
            console.error("Error fetching response from OpenAI:", error);
            throw error;
        }
    }
    
    public async addMonthsAI(date: Date, months: number) {
        if (!this.apiKey) {
            throw new Error("OpenAI API key is not set.");
        }
        const dateString = date.toISOString().split("T")[0];
        const prompt = `Add ${months} months to ${dateString}.`;
        try {
            const response = await (this.openai as OpenAI).chat.completions.create({
                model: "gpt-3.5-turbo",
                messages: [{ role: "user", content: prompt }],
                max_tokens: 100,
            });
    
            return response.choices[0].message.content;
        } catch (error) {
            console.error("Error fetching response from OpenAI:", error);
            throw error;
        }
    }
    
    public async addYearsAI(date: Date, years: number) {
        if (!this.apiKey) {
            throw new Error("OpenAI API key is not set.");
        }
        const dateString = date.toISOString().split("T")[0];
        const prompt = `Add ${years} years to ${dateString}.`;
        try {
            const response = await (this.openai as OpenAI).chat.completions.create({
                model: "gpt-3.5-turbo",
                messages: [{ role: "user", content: prompt }],
                max_tokens: 100,
            });
    
            return response.choices[0].message.content;
        } catch (error) {
            console.error("Error fetching response from OpenAI:", error);
            throw error;
        }
    }
    
    public async subtractDaysAI(date: Date, days: number) {
        if (!this.apiKey) {
            throw new Error("OpenAI API key is not set.");
        }
        const dateString = date.toISOString().split("T")[0];
        const prompt = `Subtract ${days} days from ${dateString}.`;
        try {
            const response = await (this.openai as OpenAI).chat.completions.create({
                model: "gpt-3.5-turbo",
                messages: [{ role: "user", content: prompt }],
                max_tokens: 100,
            });
    
            return response.choices[0].message.content;
        } catch (error) {
            console.error("Error fetching response from OpenAI:", error);
            throw error;
        }
    }
    
    public async subtractMonthsAI(date: Date, months: number) {
        if (!this.apiKey) {
            throw new Error("OpenAI API key is not set.");
        }
        const dateString = date.toISOString().split("T")[0];
        const prompt = `Subtract ${months} months from ${dateString}.`;
        try {
            const response = await (this.openai as OpenAI).chat.completions.create({
                model: "gpt-3.5-turbo",
                messages: [{ role: "user", content: prompt }],
                max_tokens: 100,
            });
    
            return response.choices[0].message.content;
        } catch (error) {
            console.error("Error fetching response from OpenAI:", error);
            throw error;
        }
    }
    
    public async subtractYearsAI(date: Date, years: number) {
        if (!this.apiKey) {
            throw new Error("OpenAI API key is not set.");
        }
        const dateString = date.toISOString().split("T")[0];
        const prompt = `Subtract ${years} years from ${dateString}.`;
        try {
            const response = await (this.openai as OpenAI).chat.completions.create({
                model: "gpt-3.5-turbo",
                messages: [{ role: "user", content: prompt }],
                max_tokens: 100,
            });
    
            return response.choices[0].message.content;
        } catch (error) {
            console.error("Error fetching response from OpenAI:", error);
            throw error;
        }
    }
}
