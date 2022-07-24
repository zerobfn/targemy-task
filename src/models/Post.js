import { calculteTimeBefore } from '@/utils/timeBefore'
export default class Post {
    constructor({
        id,
        type,
        user_id,
        likes,
        card_id,
        collection_id,
        task_id,
        date_create,
        date_update,
        state,
        title,
        annotation,
        content,
        photo_cover,
        photo_grad,
        linkURL
    }) {
        this.id = id
        this.type = type
        this.user_id = user_id
        this.likes = likes
        this.card_id = card_id
        this.collection_id = collection_id
        this.task_id = task_id
        this.date_create = date_create
        this.date_update = date_update
        this.state = state
        this.title = title
        this.annotation = annotation
        this.content = content
        this.photo_cover = photo_cover
        this.photo_grad = photo_grad
        this.linkURL = linkURL
    }
    get postedDate() {
        return calculteTimeBefore(this.date_create)
    }
}