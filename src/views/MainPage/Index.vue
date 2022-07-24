<template>
    <div class="MainPage">
        <side-bar />
    </div>
</template>

<script>
import SideBar from './Sidebar.vue'
export default {
    name: 'MainPage',
    components: {
        SideBar
    }
}
</script>

<style lang="scss" scoped>
.MainPage {
    margin: 0 auto;
    flex-grow: 1;
    max-width: 1440px;
    background: rgba(0, 0, 0, 0.1);
}
</style>