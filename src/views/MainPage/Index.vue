<template>
    <div class="MainPage">
        <side-bar />
        <post-page />
    </div>
</template>

<script>
import SideBar from './Sidebar.vue'
import PostPage from './PostPage/PostPage.vue'
export default {
    name: 'MainPage',
    components: {
        SideBar,
        PostPage
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