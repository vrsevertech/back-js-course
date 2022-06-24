import { collection } from './DBConnect'
import { User, Item } from './models'

export async function addUser(user: User) {
    if (await collection.findOne({login: user.login}) !== null) return false
    
    user.items = []
    user.lastId = 0
    const result = await collection.insertOne(user)
    return { ok: result.acknowledged }
}

export async function auth(user: User) {
    return { ok: await collection.findOne({login: user.login, pass: user.pass}) !== null }
}

// параллелизм, транзакции, блокировки, атомарность, халатность
export async function addItem(login: User['login'], item: Item) {
    const lastId = (await collection.findOne({login: login}))?.lastId
    item.id = lastId
    await collection.updateOne({login: login}, {$push: {items: item}})
    await collection.updateOne({login: login}, {$set: {lastId: lastId + 1}})
    return { id: (await collection.findOne({login: login}))?.lastId - 1 }
}

export async function getItems(login: User['login']) {
    const user = await collection.findOne({login: login})
    return { items: user?.items }
}

export async function updateItem(login: User['login'], item: Item) {
    const res = await collection.updateOne(
        {login: login}, 
        {$set: {
            'items.$[item].text': item.text, 
            'items.$[item].checked': item.checked
        }}, 
        {arrayFilters: [{'item.id': item.id}]}
    )
    return { ok: res.acknowledged }
}

export async function deleteItem(login: User['login'], item: { id: Item['id'] }) {
    await collection.updateOne({login: login}, {$pull: {items: {id: item.id}}})
    return ({ok: true})
}
