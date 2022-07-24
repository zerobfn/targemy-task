<template>
    <div class="PostPage">
        <div class="post" v-if="post">
            <img class="post_image" :src="post.photo_cover"/>
            <div class="post_author" v-if="author">
                <div class="post_author-image-container">
                    <img class="post_author-image" :src="author.photo_avatar"/>
                </div>
                <div class="post_author-info">
                    <div class="post_author-info--fullname">
                        {{ author.fullName }}
                    </div>
                    <div class="post_author-info--subscribers">
                        {{`${author.subscribers} подписчиков`}}
                    </div>
                </div>
            </div>
            <div class="post_date">
                <p class="post_date-timebefore">
                    {{ post.postedDate }}
                </p>
                <p class="post_date-readtime">
                    1 мин на чтение
                </p>
            </div>
            <div class="post_title">
                {{ post.title }}
            </div>
            <div class="post_annotation">
                {{ post.annotation }}
            </div>
            <div class="post_content" v-html="post.content">
            </div>
        </div>
    </div>
</template>

<script>
import { httpGet } from '@/utils/http'
import { apiUrl } from '@/domain/constants'
import Post from '@/models/Post'
import User from '@/models/User'
import { post3 } from '@/data/testData'

export default {
    props: {
        postId: {
            type: Number,
            default: 3
        }
    },
    data: () => {
        return {
            post: null,
            author: null,
        }
    },
    methods: {
        getPost() {
            httpGet({
                url: `${apiUrl}/post/${this.postId}`,
                isSecureRequest: false,
                onSuccess: json => {
                    console.log(json)
                    this.post = new Post(json)
                },
                onError: error => {
                    console.error(error)
                    this.post = new Post(post3)
                },
                doFinally: () => {
                    console.log(this.post)
                    this.author = new User(this.post.user_id, true)
                }
            })
        },
        getAuthor() {
            // TODO
        }
    },
    mounted() {
        this.getPost()
    }
}
</script>

<style lang="scss" scoped>
.PostPage {
    flex-grow: 1;
    padding: 30px 20px;
    max-width: 500px;
    background: #f9f9f9;
    .post {
        background: #FFFFFF;
        &_image {
            width: 100%;
            border-radius: 25px 25px 0px 0px;
        }
        &_author {
            display: flex;
            align-items: center;
            margin-top: 2px;
            padding: 0 20px;
            height: 82px;
            &-image-container {
                width: 62px;
                height: 62px;
                padding: 3px;
                background: linear-gradient(#fff, #fff) padding-box,
                            linear-gradient(to bottom, #F5F4FF, #D2E7FF) border-box;
                border: 3px solid transparent;
                border-radius: 50%;
                .post_author-image {
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                }
                &:hover {
                    cursor: pointer;
                }
            }
            &-info {
                margin-left: 10px;
                font-style: normal;
                font-weight: 600;
                &--fullname {
                    font-size: 16px;
                    line-height: 22px;
                    color: #242424;
                    &:hover {
                        cursor: pointer;
                    }
                }
                &--subscribers {
                    margin-top: 7px;
                    font-size: 14px;
                    line-height: 19px;
                    color: #5333BE;
                }
            }
        }
        &_date {
            display: flex;
            padding: 0 20px;
            font-weight: 400;
            font-size: 14px;
            line-height: 19px;
            color: #AFAFAF;
            &-readtime {
                margin-left: 20px;
            }
        }
        &_title {
            font-weight: 700;
            font-size: 28px;
            line-height: 35px;
            color: #242424;
        }
        &_annotation {
            font-weight: 600;
            font-size: 17px;
            line-height: 22px;
            color: #545454;
        }
        &_title, &_annotation, &_content {
            margin: 20px 0;
            padding: 0 20px;
        }
        .post_content::v-deep img {
            width: 100%;
        }
    }
}
</style>