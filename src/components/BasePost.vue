<template>
    <div class="BasePost" :style="{
        'background-image': `url(${post.post.photo_cover})`
    }">
        <div class="BasePost_author">
            <div class="BasePost_author-avatar">
                <img class="BasePost_author-avatar--image" :src="post.user.photo_avatar"/>
            </div>
            <div class="BasePost_author-info">
                <div class="BasePost_author-info--fullname">
                    {{`${post.user.first_name} ${post.user.last_name}`}}
                </div>
                <div class="BasePost_author-info--posttype">
                    Блог
                </div>
            </div>
        </div>
        <div class="BasePost_timebefore">
            {{ postTime }}
        </div>
        <div class="BasePost_title">
            {{ post.post.title }}
        </div>
        <div class="BasePost_footer">
            <div class="BasePost_footer-users">
                <div class="user" v-for="(user, index) in users" :key="`user-${index}`">
                    <div class="user_avatar">
                        <img class="user_avatar-image" :src="user.photo_avatar"/>
                    </div>
                    <img class="user_action"
                        v-if="user.action_type === 1"
                        :src="require('@/assets/posts/icon_like_action.svg')"
                    />
                    <img class="user_action"
                        v-if="user.action_type === 2"
                        :src="require('@/assets/posts/icon_comment_action.svg')"
                    />
                    <img class="user_action"
                        v-if="user.action_type === 3"
                        :src="require('@/assets/posts/icon_share_action.svg')"
                    />
                </div>
            </div>
            <div class="BasePost_footer-indicators">
                <div class="indicator">
                    <img class="indicator_icon" :src="require('@/assets/posts/icon_like_normal.svg')"/>
                    <div class="indicator_value">
                        256к
                    </div>
                </div>
                <div class="indicator">
                    <img class="indicator_icon" :src="require('@/assets/posts/icon_comment_normal.svg')"/>
                    <div class="indicator_value">
                        256к
                    </div>
                </div>
                <div class="indicator">
                    <img class="indicator_icon" :src="require('@/assets/posts/icon_share_normal.svg')"/>
                    <div class="indicator_value">
                        256к
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { calculteTimeBefore } from '@/utils/timeBefore'
import { userActions } from '@/data/testData'

export default {
    name: 'BasePost',
    props: {
        post: {
            type: Object,
            default: null
        }
    },
    data: () => {
        return {
            users: userActions
        }
    },
    computed: {
        postTime() {
            return calculteTimeBefore(this.post.post.date_create)    
        }
    }
}
</script>

<style lang="scss" scoped>
.BasePost {
    display: flex;
    flex-direction: column;
    margin: 0 10px;
    padding: 15px;
    width: 340px;
    height: 506px;
    background-size: cover;
    border-radius: 25px;
    &_author {
        display: flex;
        &-avatar {
            width: 52px;
            height: 52px;
            padding: 3px;
            border: 3px solid #F5F4FF;
            border-radius: 50%;
            &--image {
                width: 40px;
                height: 40px;
                border-radius: 50%;
            }
            &:hover {
                cursor: pointer;
            }
        }
        &-info {
            margin-left: 10px;
            &--fullname {
                font-weight: 600;
                font-size: 16px;
                line-height: 22px;
                color: #FFFFFF;
                &:hover {
                    cursor: pointer;
                }
            }
            &--posttype {
                margin-top: 7px;
                width: fit-content;
                padding: 1px 4px;
                font-style: normal;
                font-weight: 600;
                font-size: 13px;
                line-height: 18px;
                color: #271A3F;
                background: linear-gradient(180deg, #F5F4FF -19.85%, #D2E7FF 100%);
                border-radius: 5px;
            }
        }
    }
    &_timebefore {
        margin-top: auto;
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        line-height: 15px;
        color: #D8D8D8;
    }
    &_title {
        margin-top: 10px;
        font-style: normal;
        font-weight: 600;
        font-size: 17px;
        line-height: 23px;
        color: #FFFFFF;
    }
    &_footer {
        display: flex;
        margin-top: 15px;
        &-users {
            display: flex;
            .user {
                position: relative;
                margin-left: -15px;
                &_avatar {
                    width: 40px;
                    height: 40px;
                    background: linear-gradient(#fff, #fff) padding-box,
                                linear-gradient(to bottom, #F5F4FF, #D2E7FF) border-box;
                    border: 3px solid transparent;
                    border-radius: 50%;
                    &-image {
                        width: 34px;
                        height: 34px;
                        border-radius: 50%;
                    }
                }
                &_action {
                    position: absolute;
                    bottom: -1px;
                }
                &:first-child {
                    margin-left: 0;
                }
                &:hover {
                    cursor: pointer;
                }
            }
        }
        &-indicators {
            display: flex;
            margin-left: auto;
            .indicator {
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-left: 20px;
                &_icon {
                    &:hover {
                        cursor: pointer;
                    }
                }
                &_value {
                    font-style: normal;
                    font-weight: 600;
                    font-size: 14px;
                    line-height: 19px;
                    color: #FFFFFF;
                }
            }
        }
    }
}
</style>