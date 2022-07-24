<template>
    <div class="MainContainer">
        <header-component class="MainContainer_header"/>
        <div class="MainContainer_body">
            <router-view />
        </div>
        <footer-component class="MainContainer_footer"/>
    </div>
</template>

<script>
import HeaderComponent from './Header.vue'
import FooterComponent from './Footer.vue'
export default {
    name: 'MainContainer',
    components: {
        HeaderComponent,
        FooterComponent
    }
}
</script>

<style lang="scss" scoped>
.MainContainer {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    &_header {
        position: fixed;
        z-index: 2;
        top: 0;
    }
    &_body {
        display: flex;
        width: 100%;
        flex-grow: 1;
        padding-top: 70px;
    }
}
</style>