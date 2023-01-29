<template>
    <div class="MainPage">
        <div class="MainPage_wrapper" v-show="false">
            <side-bar />
            <post-page :postId="postId" :key="`post-${postId}`"/>
            <comments-view :postId="postId" :key="`comments-${postId}`"/>
        </div>
        <related-posts  v-show="false"/>
        <test-page />
    </div>
</template>

<script>
import SideBar from './Sidebar.vue'
import PostPage from './PostPage/PostPage.vue'
import CommentsView from './PostPage/Comments.vue'
import RelatedPosts from './PostPage/RelatedPosts.vue'
import TestPage from './TestPage.vue'

export default {
    name: 'MainPage',
    components: {
        SideBar,
        PostPage,
        CommentsView,
        RelatedPosts,
        TestPage
    },
    computed: {
        postId() {
            return this.$store.getters.getPostId
        }
    }
}
</script>

<style lang="scss" scoped>
.MainPage {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    margin: 0 auto;
    max-width: 1440px;
    &_wrapper {
        display: flex;
        flex-grow: 1;
    }
}
</style>