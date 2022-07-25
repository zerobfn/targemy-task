<template>
    <div class="MainPage">
        <side-bar />
        <post-page :postId="postId"/>
        <comments-view :postId="postId"/>
    </div>
</template>

<script>
import SideBar from './Sidebar.vue'
import PostPage from './PostPage/PostPage.vue'
import CommentsView from './PostPage/Comments.vue'

export default {
    name: 'MainPage',
    components: {
        SideBar,
        PostPage,
        CommentsView
    },
    computed: {
        postId() {
            return 3
        }
    }
}
</script>

<style lang="scss" scoped>
.MainPage {
    display: flex;
    flex-grow: 1;
    margin: 0 auto;
    max-width: 1440px;
    background: rgba(0, 0, 0, 0.1);
}
</style>