import "dotenv/config";
import {drizzle} from "drizzle-orm/neon-http";
import {neon} from "@neondatabase/serverless";

import * as schema from "../db/schema";

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql, {schema});

const main = async () => {
    try {
        console.log("Seedign database");

        await db.delete(schema.courses);
        await db.delete(schema.userProgress);
        await db.delete(schema.units);
        await db.delete(schema.lessons);
        await db.delete(schema.challenges);
        await db.delete(schema.challengeOptions);
        await db.delete(schema.challengeProgress);

        await db.insert(schema.courses).values ([
            {
                id: 1,
                title: "Stocks",
                imageSrc: "/stock.png",
            },
            {
                id: 2,
                title: "Budgeting",
                imageSrc: "/budget.png",
            },
            {
                id: 3,
                title: "Retirement Planning",
                imageSrc: "/retirement.png",
            },
            {
                id: 4,
                title: "Debt Management",
                imageSrc: "/debt.png",
            },
        ]);

        await db.insert(schema.units).values([
            {
                id: 1,
                courseId: 1,
                title: "Unit 1",
                description: "Learn about stocks",
                order: 1,
            }
        ]);

        await db.insert(schema.lessons).values([
            {
                id: 1,
                unitId: 1,
                order: 1,
                title: "What are stocks?",
            },
            {
                id: 2,
                unitId: 1,
                order: 2,
                title: "What are the type of stocks?",
            },
            {
                id: 3,
                unitId: 1,
                order: 3,
                title: "how to?",
            },
            {
                id: 4,
                unitId: 1,
                order: 4,
                title: "What type of stocks?",
            },
            {
                id: 5,
                unitId: 1,
                order: 5,
                title: "What are the type of stocks?",
            },
            {
                id: 6,
                unitId: 1,
                order: 6,
                title: "What are the type of stocks?",
            },
        ]);

        await db.insert(schema.challenges).values([
            {
                id: 1,
                lessonId: 1,
                type: "SELECT",
                order: 1,
                question: "what is stock?",
            },
            {
                id: 2,
                lessonId: 1,
                type: "SELECT",
                order: 2,
                question: "Which of the is an example of stocks?",
            },
            {
                id: 3,
                lessonId: 1,
                type: "SELECT",
                order: 3,
                question: "True or False: Stocks represent ownership in a company",
            },
        ]);

        await db.insert(schema.challengeOptions).values([
            {
                id: 1,
                challengeId: 1,
                correct: true,
                text: "Pieces of ownership in a company that investors can buy",
                // audioSrc: "/stocks_t.mp3",
            },
            {
                id: 2,
                challengeId: 1,
                correct: false,
                text: "Loans given to a company by investors",
                // audioSrc: "/stocks_f1.mp3",
            },
            {
                id: 3,
                challengeId: 1,
                correct: false,
                text: "Government bonds that pay interest",
                // audioSrc: "/stocks_f2.mp3",
            },
            {
                id: 4,
                challengeId: 1,
                correct: false,
                text: "Certificates of deposit issued by banks",
                // audioSrc: "/stocks_f3.mp3",
            },
        ]);

        await db.insert(schema.challengeOptions).values([
            {
                id: 5,
                challengeId: 2,
                correct: false,
                text: "Bitcoin ",
                // audioSrc: "/stocks_t.mp3",
            },
            {
                id: 6,
                challengeId: 2,
                correct: false,
                text: "Gold",
                // audioSrc: "/stocks_f1.mp3",
            },
            {
                id: 7,
                challengeId: 2,
                correct: true,
                text: "Apple Inc. (AAPL)",
                // audioSrc: "/stocks_f2.mp3",
            },
        ]);

        await db.insert(schema.challengeOptions).values([
            {
                id: 8,
                challengeId: 3,
                correct: true,
                text: "True",
                // audioSrc: "/stocks_f1.mp3",
            },
            {
                id: 9,
                challengeId: 3,
                correct: false,
                text: "False",
                // audioSrc: "/stocks_f2.mp3",
            },
        ]);
        
        await db.insert(schema.challenges).values([
            {
                id: 4,
                lessonId: 2,
                type: "SELECT",
                order: 1,
                question: "What does IPO stand for?"
            },
            {
                id: 5,
                lessonId: 2,
                type: "SELECT",
                order: 2,
                question: "Which market index tracks the 30 largest U.S. companies?"
            },
            {
                id: 6,
                lessonId: 2,
                type: "SELECT",
                order: 3,
                question: "What is a dividend?"
            },
        ]);

        await db.insert(schema.challengeOptions).values([
            {
               id: 10,
                challengeId: 4,
                correct: false,
                text: "Initial Price Offering",
                // audioSrc: "/stocks_f1.mp3",
            },
            {
                id: 11,
                challengeId: 4,
                correct: true,
                text: "Initial Public Offering",
                // audioSrc: "/stocks_f2.mp3",
            },
            {
                id: 12,
                challengeId: 4,
                correct: false,
                text: "International Public Order",
                // audioSrc: "/stocks_f2.mp3",
            },
            {
               id: 13,
                challengeId: 4,
                correct: false,
                text: "Individual Price Option",
                // audioSrc: "/stocks_f2.mp3",
            },
        ]);

        await db.insert(schema.challengeOptions).values([
            {
                id: 14,
                challengeId: 5,
                correct: false,
                text: "NASDAQ",
                // audioSrc: "/stocks_f1.mp3",
            },
            {
                id: 15,
                challengeId: 5,
                correct: false,
                text: "S&P 500",
                // audioSrc: "/stocks_f2.mp3",
            },
            {
                id: 16,
                challengeId: 5,
                correct: true,
                text: "Dow Jones Industrial Average",
                // audioSrc: "/stocks_f2.mp3",
            },
            {
                id: 17,
                challengeId: 5,
                correct: false,
                text: "Russell 2000",
                // audioSrc: "/stocks_f2.mp3",
            },
        ]);

        await db.insert(schema.challengeOptions).values([
            {
                 id: 18,
                challengeId: 6,
                correct: false,
                text: "A fee for buying stocks",
                // audioSrc: "/stocks_f1.mp3",
            },
            {
               id: 19,
                challengeId: 6,
                correct: true,
                text: "A company's earnings distributed to shareholders",
                // audioSrc: "/stocks_f2.mp3",
            },
            {
                id: 20,
                challengeId: 6,
                correct: false,
                text: "A penalty for selling stocks",
                // audioSrc: "/stocks_f2.mp3",
            },
            {
                 id: 21,
                challengeId: 6,
                correct: false,
                text: "A type of bond interest",
                // audioSrc: "/stocks_f2.mp3",
            },
        ]);


        // ]);

        console.log("Seeding Finished")
    } catch (error) {
        console.log(error);
        throw new Error("Failed to seed the database");
    };

};

main();