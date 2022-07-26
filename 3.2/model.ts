import { Client } from 'pg'
const client = new Client({
    host: 'localhost',
    user: 'postgres',
    password: '1',
    database: 'libcourse',
})
//https://www.youtube.com/results?search_query=postgresql+express
client.connect().then(async () => {
    const res = await client.query()
    await client.end()
})