import { CronJob } from 'cron'

const job = new CronJob('1-59 * * * * *', () => console.log('d'))
job.start()