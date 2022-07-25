import { calculteTimeBefore } from '@/utils/timeBefore'
import User from './User'

export default class Comment {
    constructor({
        id,
        user_id,
        type,
        post_id,
        card_id,
        date_create,
        content
    }) {
        this.id = id
        this.user_id = user_id
        this.type = type
        this.post_id = post_id
        this.card_id = card_id
        this.date_create = date_create
        this.content = content
        this.user = new User(this.user_id)
    }
    get commentDate() {
        return calculteTimeBefore(this.date_create)
    }
}