import dotenv from 'dotenv'
import { execute } from '@getvim/execute'

dotenv.config()

const env = process.env

const date = new Date()
const today = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
const backupFile = `backups/pg-backup-${today}.tar`

export async function makeBackup() {
    try {
        await execute(`pg_dump -U ${env.PGUSER} -h ${env.PGHOST} -f ${backupFile} -F t -d ${env.PGDATABASE}`)
        console.log(`backup ${backupFile} (re)created`)
    } catch(e) {
        console.log('backup failed because:', e)
    }
}
