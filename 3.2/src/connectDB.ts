import { Pool } from 'pg'
export const db = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: '1',
    database: 'libcourse'
})
