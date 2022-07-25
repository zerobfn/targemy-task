<template>
    <div class="PostPage">
        <div class="post" v-if="post">
            <img class="post_image" :src="post.photo_cover"/>
            <div class="post_author" v-if="author">
                <div class="post_author_wrapper">
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
            <div class="post_footer">
                <div class="post_footer-item">
                    <img class="post_footer-item--icon" />
                    <div class="post_footer-item--text">
                        {{ post.likes }}
                    </div>
                </div>
                <div class="post_footer-item">
                    <img class="post_footer-item--icon" />
                    <div class="post_footer-item--text">
                        {{ post.likes }}
                    </div>
                </div>
                <div class="post_footer-item">
                    <img class="post_footer-item--icon" />
                    <div class="post_footer-item--text">
                        {{ post.likes }}
                    </div>
                </div>
            </div>
        </div>
        <div class="post_author" v-if="author">
            <div class="post_author_wrapper">
                <div class="post_author-image-container">
                    <img class="post_author-image" :src="author.photo_avatar"/>
                </div>
                <div class="post_author-info">
                    <div class="post_author-info--fullname">
                        {{ author.fullName }}
                    </div>
                    <div class="post_author-info--subscribers">
                        <span class="author_subscribe">
                            Подписаться
                            <img :src="require('@/assets/plus_icon.svg')"/>
                        </span>
                        {{`${author.subscribers} подписчиков`}}
                    </div>
                </div>
            </div>
            <p class="post_author-about">
                {{ author.about }}
            </p>
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
                    this.post = new Post(json)
                },
                onError: error => {
                    console.log(error)
                    this.post = new Post(post3)
                },
                doFinally: () => {
                    this.author = new User(this.post.user_id, true)
                }
            })
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
            flex-direction: column;
            justify-content: center;
            margin-top: 2px;
            padding: 0 20px;
            height: 82px;
            &_wrapper {
                display: flex;
                align-items: center;
                .post_author-image-container {
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
                .post_author-info {
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
                        .author_subscribe {
                            img {
                                margin: 0 10px 0 5px;
                            }
                            &:hover {
                                cursor: pointer;
                            }
                        }
                        margin-top: 7px;
                        font-size: 14px;
                        line-height: 19px;
                        color: #5333BE;
                    }
                }
            }
            &-about {
                font-weight: 400;
                font-size: 14px;
                line-height: 19px;
                color: #242424;
            }
        }
        &_author:last-child {
            margin-top: 20px;
            padding: 20px;
            background: #FFFFFF;
            border-radius: 25px;
            height: auto;
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
        .post_content::v-deep(img) {
            width: 100%;
        }
        &_footer {
            display: flex;
            &-item {
                display: flex;
                flex-direction: column;
                flex-grow: 1;
                height: 60px;
                justify-content: center;
                align-items: center;
                background: #5333BE;
                &--text {
                    margin-top: 2px;
                    font-weight: 600;
                    font-size: 14px;
                    line-height: 19px;
                    color: #FFFFFF;
                }
                &:hover {
                    cursor: pointer;
                    background: #EEF8FF;
                    .post_footer-item--text {
                        color: #5333BE;
                    }
                }
            }
            &-item:nth-child(1) {
                border-bottom-left-radius: 25px;
                .post_footer-item--icon {
                    content: url('@/assets/like_icon.svg');
                }
                &:hover {
                    .post_footer-item--icon {
                        content: url('@/assets/like_icon-hover.svg');
                    }
                }
            }
            &-item:nth-child(2) {
                .post_footer-item--icon {
                    content: url('@/assets/comment_icon.svg');
                }
                &:hover {
                    .post_footer-item--icon {
                        content: url('@/assets/comment_icon-hover.svg');
                    }
                }
            }
            &-item:nth-child(3) {
                border-bottom-right-radius: 25px;
                .post_footer-item--icon {
                    content: url('@/assets/share_icon.svg');
                }
                &:hover {
                    .post_footer-item--icon {
                        content: url('@/assets/share_icon-hover.svg');
                    }
                }
            }
        }
    }
}
</style>