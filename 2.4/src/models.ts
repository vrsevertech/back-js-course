import { ObjectId } from 'mongodb'

export type Item = {
    text: string,
    checked: boolean,
    id?: number,
}

export type User = {
    login: string, 
    pass: string, 
    lastId?: number,
    items?: Item[],
    id?: ObjectId,
}
