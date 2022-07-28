<template>
    <div class="SignIn">
        <div class="SignIn_wrapper">
            <div class="header">
                <img class="header-icon" :src="require('@/assets/auth_icon.svg')"/>
                <div class="header-text">
                    Авторизация
                </div>
                <img class="header-close" :src="require('@/assets/close_icon.svg')"/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SignIn'
}
</script>

<style lang="scss" scoped>
.SignIn {
    align-items: center;
    justify-content: center;
    &_wrapper {
        padding: 25px;
        background: #FFFFFF;
        box-shadow: 0px 0px 7px 5px rgba(0, 0, 0, 0.138904);
        border-radius: 25px;
    }
}
</style>