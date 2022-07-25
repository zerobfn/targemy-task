<template>
    <div class="Comments">
        <div class="Comments_title">
            <img class="Comments_title-icon" :src="require('@/assets/discussion_icon.svg')"/>
            <div class="Comments_title-text">
                {{ `${totalCount} комментариев` }} 
            </div>
        </div>
        <div class="Comments_new">
            <div class="Comments_new-placeholder" v-if="!newComment" @click="toggleNewComment()">
                Написать комментарий
            </div>
            <div class="Comments_new-wrapper" v-else>
                <textarea class="new_comment-textarea" placeholder="Не более 1000 символов" v-model="comment"/>
                <img class="new_comment-close" @click="toggleNewComment()" :src="require('@/assets/close_icon.svg')"/>
                <button class="new_comment-button">
                    Опубликовать
                </button>
            </div>
        </div>
        <div class="comment" v-for="(comment, index) in comments" :key="`comment-${index}-${comment}`">
            <div class="comment_author">
                <div class="comment_author-image-container">
                    <img class="comment_author-image" :src="comment.user.photo_avatar"/>
                </div>
                    <div class="comment_author-info">
                        <div class="comment_author-info--fullname">
                            {{ comment.user.fullName }}
                        </div>
                        <div class="comment_author-info--timebefore">
                            {{ comment.commentDate }}
                        </div>
                    </div>
            </div>
            <div class="comment_text">
                {{comment.content}}
            </div>
        </div>
        <div class="show_more" v-if="nextUrl" @click="getComments()">Показать еще</div>
    </div>
</template>

<script>
import { httpGet } from '@/utils/http'
import { apiUrl } from '@/domain/constants'
import Comment from '@/models/Comment'
import { comments } from '@/data/testData'

export default {
    name: 'CommentsView',
    props: {
        postId: {
            type: Number,
            default: 3
        }
    },
    data: () => {
        return {
            nextUrl: '',
            comments: [],
            totalCount: 0,
            newComment: false,
            comment: ''
        }
    },
    methods: {
        getComments() {
            if (this.nextUrl === null) return
            httpGet({
                url: this.nextUrl,
                isSecureRequest: false,
                onSuccess: json => {
                    json.items.forEach(x => {
                        this.comments.push(new Comment(x))
                    })
                    this.totalCount = json._meta.totalCount
                    this.nextUrl = json._links.next ? json._links.next.href : null
                },
                onError: error => {
                    console.error(error)
                    const result = comments.find(x => x.url === this.nextUrl)
                    if (result) {
                        result.data.items.forEach(x => {
                            this.comments.push(new Comment(x))
                        })
                        this.totalCount = result.data._meta.totalCount
                        this.nextUrl = result.data._links.next ? result.data._links.next.href : null
                    }
                }
            })
            
        },
        toggleNewComment() {
            this.newComment = !this.newComment
        }
    },
    mounted() {
        this.nextUrl = `${apiUrl}/comments?filter%5Bpost_id%5D=${this.postId}&sort=-id&page=1&per-page=2`
        this.getComments()
    }
}
</script>

<style lang="scss" scoped>
.Comments {
    flex-grow: 1;
    padding: 20px;
    max-width: 500px;
    background: #FFFFFF;
    &_title {
        display: flex;
        align-items: center;
        &-text {
            margin-left: 9px;
            font-weight: 600;
            font-size: 14px;
            line-height: 19px;
            color: #000000;
        }
    }
    &_new {
        margin-top: 30px;
        &-placeholder {
            padding: 10px 20px;
            background: #FFFFFF;
            border: 1px solid #E9E9E9;
            border-radius: 24.5px;
            font-weight: 400;
            font-size: 15px;
            line-height: 20px;
            color: #A19BB5;
            &:hover {
                cursor: pointer;
            }
        }
        &-wrapper {
            position: relative;
            display: flex;
            flex-direction: column;
            .new_comment-textarea {
                min-height: 56px;
                width: 100%;
                padding: 16px;
                border-radius: 8px 8px 0 0;
                resize: vertical;
                padding: 16px;
                font-size: 15px;
                border: solid 1px #e9e9e9;
                background-color: #fff;
                color: #000;
                &:hover {
                    border-color: #ceb3ff;
                }
                &:focus {
                    border-color: #7349ff;
                }
            }
            .new_comment-close {
                width: fit-content;
                height: fit-content;
                position: absolute;
                top: -15px;
                right: -15px;
                cursor: pointer;
            }
            .new_comment-button {
                padding: 14px;
                text-align: center;
                border-radius: 0 0 8px 8px;
                box-shadow: 0 0 4px 0 rgb(216 216 216 / 80%);
                background: #5333be;
                font-size: 16px;
                font-weight: 600;
                color: #FFFFFF;
                border: none;
                &:hover {
                    cursor: pointer;
                    background-color: #422899;
                }
            }
        }
    }
    .comment {
        margin-top: 20px;
        padding: 20px;
        background: #F9F9F9;
        border-radius: 15px;
        &_author {
            display: flex;
            justify-items: center;
            &-image-container {
                width: 57px;
                height: 57px;
                padding: 3px;
                background: linear-gradient(#fff, #fff) padding-box,
                            linear-gradient(to bottom, #F5F4FF, #D2E7FF) border-box;
                border: 3px solid transparent;
                border-radius: 50%;
                .comment_author-image {
                    width: 45px;
                    height: 45px;
                    border-radius: 50%;
                }
                &:hover {
                    cursor: pointer;
                }
            }
            &-info {
                margin-left: 10px;
                font-style: normal;
                &--fullname {
                    font-weight: 700;
                    font-size: 16px;
                    line-height: 22px;
                    color: #242424;
                    &:hover {
                        cursor: pointer;
                    }
                }
                &--timebefore {
                    margin-top: 5px;
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 16px;
                    color: #7B7B7B;
                }
            }
        }
        &_text {
            margin-top: 5px;
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 19px;
            color: #282829;
        }
    }
    .show_more {
        margin-top: 10px;
        font-style: normal;
        font-weight: 600;
        font-size: 15px;
        line-height: 20px;
        color: #5333BE;
        &:hover {
            cursor: pointer;
        }
    }
}
textarea {
    border: none;
    overflow: auto;
    outline: none;

    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
}
</style>