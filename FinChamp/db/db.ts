import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { config } from "dotenv";
import mongoose, {Mongoose} from "mongoose";

config({ path: ".env" });

const sql = neon(process.env.DATABASE_URL!);
export const db = drizzle(sql);

const MONGODB_URL = process.env.MONGODB_URL!; 

interface MongooseConn {
    conn: Mongoose | null;
    promise: Promise<Mongoose> | null;
}

let cached: MongooseConn = (global as any).mongoose;

if(!cached) {
    cached = (global as any).mongoose = {
        conn: null,
        promise: null
    }
}

export const connect = async () => {
    if (cached.conn) return cached.conn;

    cached.promise = cached.promise ||
    mongoose.connect(MONGODB_URL, {
        dbName: 'clerk-next14-db',
        bufferCommands: false,
        connectTimeoutMS: 30000
    })

    cached.conn = await cached.promise;

    return cached.conn;
}