import dotenv from 'dotenv'
import { execute } from '@getvim/execute'

dotenv.config()

const env = process.env

const date = new Date()
const today = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
const backupFile = `backups/pg-backup-${today}.tar`

export function makeBackup() {
    execute(`pg_dump -U ${env.PGUSER} -h ${env.PGHOST} -p ${env.PGPORT} -f ${backupFile} -F t -d ${env.PGDATABASE}`)
    console.log(`backup ${backupFile} (пере)создан`)
}
