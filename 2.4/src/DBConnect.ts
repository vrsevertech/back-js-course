import { Collection, MongoClient } from "mongodb";
import * as dotenv from "dotenv";

export let collection: Collection;

export async function DBConnect() {
    dotenv.config();
    const connStr = process.env.DB_CONN_STRING;
    const collName = process.env.COLLECTION_NAME;
    const DBName = process.env.DB_NAME;
    if (!connStr || !collName || !DBName) {
        console.log("укажите необходимые переменные окружения");
        return false;
    }

    const client = new MongoClient(connStr);
    await client.connect();
    const db = client.db(DBName);
    collection = db.collection(collName);
 }