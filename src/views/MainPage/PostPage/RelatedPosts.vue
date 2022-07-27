<template>
    <div class="RelatedPosts">
        <div class="RelatedPosts_title">
            Похожие посты
        </div>
        <div class="posts">
            <base-post
                v-for="post in posts"
                :key="post.post.id"
                :post="post"
            />
        </div>
    </div>
</template>

<script>
import BasePost from '@/components/BasePost.vue'
import { posts } from '@/data/testData'

export default {
    name: 'RelatedPosts',
    components: {
        BasePost
    },
    data: () => {
        return {
            posts: posts
        }
    }
}
</script>

<style lang="scss" scoped>
.RelatedPosts {
    &_title {
        display: flex;
        justify-content: center;
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 27px;
    }
    .posts {
        max-width: min(95vw, 1440px);
        display: flex;
        margin-top: 20px;
        overflow: hidden;
    }
}
</style>