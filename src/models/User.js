import { httpGet } from "@/utils/http"
import { apiUrl } from "@/domain/constants"
import { users, userInfo } from "@/data/testData"

export default class User {
    constructor(id, info = false) {
        this.id = id
        this.first_name = ''
        this.last_name = ''
        this.is_company = 0
        this.status = 0
        this.created_at = ''
        this.updated_at = ''
        this.is_verified = 0
        this.city = ''
        this.hobby = ''
        this.about = ''
        this.photo_cover = ''
        this.photo_avatar = ''
        this.profileLink = ''
        this.info = {
            postsCount: 0,
            collectionsCount: 0,
            targetsCount: 0,
            challengeCount: 0,
            participantCount: 0,
            subscribersCount: 0,
            subscribesCount: 0,
            withTargemySince: ''
        }
        this.getUser()
        if (info) {
            this.getInfo()
        }
    }
    getUser() {
        httpGet({
            url: `${apiUrl}/user/${this.id}`,
            isSecureRequest: false,
            onSuccess: json => {
                this.setUser(json)
            },
            onError: error => {
                console.log(error)
                const user = users.find(x => x.id === this.id)
                if (user) {
                    this.setUser(user)
                }
            }
        })
    }
    setUser({ first_name, last_name, is_company, status, created_at, updated_at, is_verified, city, hobby, about, photo_cover, photo_avatar, profileLink}) {
        this.first_name = first_name
        this.last_name = last_name
        this.is_company = is_company
        this.status = status
        this.created_at = created_at
        this.updated_at = updated_at
        this.is_verified = is_verified
        this.city = city
        this.hobby = hobby
        this.about = about
        this.photo_cover = photo_cover
        this.photo_avatar = photo_avatar
        this.profileLink = profileLink
    }
    getInfo() {
        httpGet({
            url: `${apiUrl}/user/${this.id}/info`,
            isSecureRequest: false,
            onSuccess: json => {
                this.setInfo(json.data)
            },
            onError: error => {
                console.log(error)
                const user = userInfo.find(x => x.user_id === this.id)
                if (user) {
                    this.setInfo(user.data)
                }
            }
        })
    }
    setInfo({
        postsCount,
        collectionsCount,
        targetsCount,
        challengeCount,
        participantCount,
        subscribersCount,
        subscribesCount,
        withTargemySince
    }) {
        this.info.postsCount = postsCount
        this.info.collectionsCount = collectionsCount
        this.info.targetsCount = targetsCount
        this.info.challengeCount = challengeCount
        this.info.participantCount = participantCount
        this.info.subscribersCount = subscribersCount
        this.info.subscribesCount = subscribesCount
        this.info.withTargemySince = withTargemySince
    }
    get fullName() {
        return `${this.first_name} ${this.last_name}`
    }
    get subscribers() {
        return this.info.subscribersCount
    }
}