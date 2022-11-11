import { Pool } from 'pg'
import dotenv from 'dotenv'

dotenv.config()

const host = process.env.PGHOST
const user = process.env.PGUSER
const password = process.env.PGPASSWORD
const database = process.env.PGDATABASE

export const db = new Pool({ host, user, password, database })