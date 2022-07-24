<template>
    <div class="Header_wrapper">
        <div class="Header">
            <div class="logo">
                <img :src="require('@/assets/logo.svg')"/>
            </div>
            <div class="signedin" v-if="isSignedIn">
                <div class="search">
                    <img class="search_icon" :src="require('@/assets/search_icon.svg')"/>
                    <input
                        type="text"
                        class="search_text"
                        placeholder="Найти посты"
                        v-model="searchText"/>
                </div>
            </div>
            <div class="auth" v-else>
                <div class="auth_button">Регистрация</div>
                <div class="auth_button">Вход</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HeaderComponent',
    data: () => {
        return {
            searchText: ''
        }
    },
    computed: {
        isSignedIn() {
            return this.$store.getters.isSignedIn
        }
    }
}
</script>

<style lang="scss" scoped>
$break-small: 500px;
$break-medium: 800px;
$break-large: 1200px;
.Header_wrapper {
    width: 100%;
    height: 70px;
    background: rgba(255, 255, 255, 0.72);
    backdrop-filter: blur(54.3656px);
    box-shadow: 0 2px 2px rgb(193 193 193 / 50%);
    .Header {
        display: flex;
        align-items: center;
        max-width: 1440px;
        margin: 0 auto;
        padding: 0 16px;
        height: 70px;
        .logo:hover {
            cursor: pointer;
        }
        .signedin {
            display: flex;
            flex-grow: 1;
            .search {
                display: flex;
                margin: 0 auto;
                align-items: center;
                width: 260px;
                height: 40px;
                padding: 0 16px;
                background: #F4F4F4;
                border-radius: 20px;
                &_text {
                    font-style: normal;
                    font-weight: 400;
                    font-size: 15px;
                    line-height: 20px;
                    margin: 0 0 0 8px;
                    background-color: transparent;
                    border: none;
                    padding: 0;
                    color: rgba(0,0,0,.87);
                    outline: none;
                }
            }
        }
        .auth {
            display: flex;
            margin-left: auto;
            &_button {
                margin-left: 40px;
                font-weight: 600;
                color: #5333be;
                text-decoration: none;
                &:hover {
                    cursor: pointer;
                }
            }
            @media screen and (max-width: $break-small) {
                display: block;
            }
        }
    }
}
</style>