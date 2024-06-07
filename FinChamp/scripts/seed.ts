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
        ]);

        await db.insert(schema.challenges).values([
            {
                id: 1,
                lessonId: 1,
                type: "SELECT",
                order: 1,
                question: "what is stock?",
            },
        ]);

        await db.insert(schema.challengeOptions).values([
            {
                id: 1,
                challengeId: 1,
                correct: true,
                text: "Pieces of ownership in a company that investors can buy",
                audioSrc: "/stocks_t.mp3",
            },
            {
                id: 2,
                challengeId: 1,
                correct: false,
                text: "Loans given to a company by investors",
                audioSrc: "/stocks_f1.mp3",
            },
            {
                id: 3,
                challengeId: 1,
                correct: false,
                text: "Government bonds that pay interest",
                audioSrc: "/stocks_f2.mp3",
            },
            {
                id: 4,
                challengeId: 1,
                correct: false,
                text: "Certificates of deposit issued by banks",
                audioSrc: "/stocks_f3.mp3",
            },
        ]);

        console.log("Seeding Finished")
    } catch (error) {
        console.log(error);
        throw new Error("Failed to seed the database");
    };

};

main();