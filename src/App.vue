<template>
    <div id="app">
        <div class="main">
            <router-view />
        </div>
        <div class="login"></div>
    </div>
</template>

<style lang="scss">
#app {
    display: flex;
    flex-grow: 1;
    .main {
        width: 100%;
        height: 100%;
        z-index: 1;
    }
    .login {
        z-index: 2;
    }
}
html {
    box-sizing: border-box;
    font-family: 'Open Sans';
}

*, *:before, *:after {
    box-sizing: inherit;
    font-family: inherit;
}
body {
    margin: 0;
    padding: 0;
}
</style>
